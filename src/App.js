import "./App.css";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Repos from "./pages/Repos";
import Card from "./pages/Card";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavLink  to="/:page" className='link'>
          List of repositories
        </NavLink>
      <Switch>
        
        <Route exact path="/:page" component={Repos}></Route>
        <Route path="/card/:userName/:repoName" component={Card}></Route>
        
      </Switch>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
