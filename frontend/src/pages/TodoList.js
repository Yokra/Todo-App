import React from "react";
import Form from "../pages/Form.js";


export default class TodoList extends React.Component{
    
        state = {
            todos: [],
            item: "",
            
        }
    
    
 componentDidMount() {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((res) => this.setState({ todos: res }))
      .catch((err) => err); 
      
    
  }

    addTask = (res) => {
    this.setState({
     todos: [res, ...this.state.todos]
     })
    };  
    
render() {
          
        return(
            <div>
                 
                <Form addTask = {this.addTask}/>
                 
                 {this.state.todos.map((item, i) => {
        
        return(
         <ul>   
         <li key={i}>{item.item} </li>
        
        
        </ul>
        
        
        )
        
      })
    }
    
            </div>
            );
        }
    
          



}