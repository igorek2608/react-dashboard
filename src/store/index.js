import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reposReducer from "./repos/reducer";

const rootReducer = combineReducers({
  repos: reposReducer,
});


const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

console.log(store.getState())

export default store