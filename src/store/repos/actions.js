import {
  FETCH_REPOS_LOADING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
  FETCH_CURRENT_PAGE,
  
} from "./constans";
import { createActions } from "redux-actions";
import { getRepos, getReposPage } from "../../api";


export const { fetchReposLoading, fetchReposSuccess, fetchReposError, fetchCurrentPage } =
  createActions({
    [FETCH_REPOS_LOADING]: (loading) => ({ loading }),
    [FETCH_REPOS_SUCCESS]: (items) => ({ items,}),
    [FETCH_REPOS_ERROR]: (error) => ({ error }),
    [FETCH_CURRENT_PAGE]: (currentPage) => ({ currentPage }),
  });

  

export const fetchRepos = (currentPage) => async (dispatch) => {
  try {
    
    dispatch(fetchReposLoading());
    let data = await getReposPage(currentPage);

    console.log(data)
    dispatch(fetchReposSuccess(data));
    dispatch(fetchCurrentPage(currentPage))

  } catch (error) {
    dispatch(fetchReposError({ error }));
  }
};







