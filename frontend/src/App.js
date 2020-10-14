import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./pages/TodoList.js";

export default class App extends React.Component {
  /* constructor(props) {
    super(props)
     */
    state = { 
      data: []
     };
    //console.log(this.state.data);
  
     
 /*  } */

  componentDidMount() {
    fetch("http://localhost:8080/todos")
      //.then((res) => res.text())
      .then((res) => res.json())
      .then((res) => this.state.setState({ data: res }))
      .catch((err) => err); 
     /*  this.callApi()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err)); */
      
  }

    /* callApi = async () => {
    const data = await fetch("http://localhost:8080/todos");
    const body = await data.json();
    if (data.status !== 200) throw Error(body.message);
    return body;
  }; */

  /* handleSubmit = async e =>{
    e.preventDefault();
    //this.onSubmit(this.state.data);
    /* let newItem = this.state.data;
    this.state.data.push(newItem);
    this.setState({data: this.state.newItem}); */
    
    /* const response = await fetch("http://localhost:8080/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify( newItem ),
    });
    await response.text();
    
    
    
};

handleChange(e) {
  this.setState({
      data: e.target.value
  });
}
    */
  render() {
    
    //const{createNewTodo} = this.state;
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
              
               <TodoList onSubmitted={this.handleSubmit}/> 
            </div>
            
            
           {/*  <form onSubmit =  {this.handleSubmit}>
            <input onChange = {e => this.setState({ item: e.target.value })}  placeholder="enter task" ></input>
            <button type="submit"> add</button>
            </form>
            <p>{this.state.createNewTodo}</p>  */}
             
          </Route>
          <Route path="/about">
            <div>About this website</div>
          </Route>
        </Switch>
      </Router>
    );
  }

}



