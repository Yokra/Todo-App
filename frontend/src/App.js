import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./pages/TodoList.js";

export default class App extends React.Component {  
  
    
  render() {
    return (
      
      <Router>
        <nav className="App">
          <ul>
            <Link to="/">to do list</Link>
          </ul>

          <ul>
            <Link to="/about">about</Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">  
               <TodoList />            
          </Route>
          <Route path="/about">
            <div className="text">This To Do List is part of KEA project.</div>
          </Route>
        </Switch>
      </Router>
    );
  }

}



