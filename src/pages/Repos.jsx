import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepos } from "../store/repos/actions";
import {
  selectReposItems,
  selectReposError,
  selectReposLoading,
  selectCurrentPage,
} from "../store/repos/selectors";
import { NavLink, useParams, useHistory, generatePath } from "react-router-dom";
import "./Repos.scss";

function Repos() {
  const [value, setValue] = useState("");
  const params = useParams();
  const history = useHistory();
  const items = useSelector(selectReposItems);
  const loading = useSelector(selectReposLoading);
  const error = useSelector(selectReposError);
  const currentPage = useSelector(selectCurrentPage);
  const pages = [1, 2, 3, 4];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos(params.page));
  }, [params.page]);

  let filteredRepos = items.filter((item) => {
    return item.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  const handleClickPagination = (page) => () => {
    history.push(generatePath("/:page", { page }));
    console.log(currentPage);
  };

  return (
    <div className="repos">
      {loading && <div>Loading...</div>}
      {error && <div>Error^</div>}
      <div className="search-wrapper">
        <input
          className="search"
          type="name"
          placeholder="search"
          onChange={(event) => setValue(event.target.value)}
        ></input>
      </div>
      {filteredRepos
        .sort((a, b) => {
          if (b.stargazers_count > a.stargazers_count) return 1;
          else if (b.stargazers_count < a.stargazers_count) return -1;
          return 0;
        })
        .map((item) => (
          <div className="repos-item">
            <h1 className="repo-name">
              <NavLink
                className="link-name"
                to={`/card/${item.owner.login}/${item.name}`}
              >
                {item.name}
              </NavLink>
            </h1>
            <ul className="repos-description">
              <li>Stars:{item.stargazers_count}</li>
              <li>Last commit:{item.updated_at}</li>
              <li>Link to Github:{item.git_url}</li>
            </ul>
          </div>
        ))}

      <div className="pages">
        {pages.map((page, index) => (
          <span
            className={currentPage == page ? "current-page" : "page"}
            key={index}
            onClick={handleClickPagination(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Repos;
