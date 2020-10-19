import React from "react";
import Form from "../pages/Form.js";
import  "../pages/TodoList.css";


export default class TodoList extends React.Component{
    
        state = {
            todos: [],
            item: "",
            id: "",
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
      };


      EditFormSubmit =  (editItem) => {

        const {editTask} = this.props;

        fetch("http://localhost:8080/todos/"+ editItem, {
           method: 'PATCH',
           headers: {
            'Accept': 'application/json',
           },
           body: JSON.stringify({item: this.state.item}),
         })
          .then(res => res.json())
          .then((res) => editTask(res));
               
      
     };      
     
render() {
          
        return(
            <div className="container"> 
                <Form addTask = {this.addTask}/>
                   {this.state.todos.map((item, id) => {
        
        return(
        <div className="todos" key={id}>{item.item} 
            {/* <button onClick = {this.EditFormSubmit}>Edit</button> */}
            <span value={item.id} onClick={() => this.deleteItem(item.id)}>
            <img className="close" alt="close-icon" src={require('../images/close.png')} style={{width: 35}} />
            </span>
        </div>
        
        ) 
      })
    }
            
          </div>
            
    );
            
  }
           

}