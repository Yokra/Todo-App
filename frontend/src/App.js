import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./pages/TodoList.js";

export default class App extends React.Component {
    /* state = { 
      data: []
     };
    

  componentDidMount() {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((res) => this.state.setState({ data: res }))
      .catch((err) => err); 
      
  }
 */
    
  render() {
    return (
      
      <Router>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>

          <ul>
            <Link to="/about">About</Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <div>
              To Do List
              
               <TodoList /> 
            </div>             
          </Route>
          <Route path="/about">
            <div>About this website</div>
          </Route>
        </Switch>
      </Router>
    );
  }

}



