import React from "react";
import Form from "../pages/Form.js";
//import Edit from "../pages/Edit.js"

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


    deleteItem(itemId) {
        fetch("http://localhost:8080/todos/" + itemId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
        

          this.setState({
            todos: this.state.todos.filter(item => item.id !== itemId)
          })
      }
    
render() {
          
        return(
            <div>
                 
                <Form addTask = {this.addTask}/>
                 
                 {this.state.todos.map((item, id) => {
        
        return(
          <ul>   
             <li key={id}>{item.item} </li>
             <button value={item.id} onClick={() => this.deleteItem(item.id)} />
         </ul>
        
        ) 
      })
    }
            
            </div>
            
 );
            
}
    
          



}