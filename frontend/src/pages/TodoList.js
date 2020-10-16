import React from "react";
import Form from "../pages/Form.js";


export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
         this.state = {
            item: [],
            text: "",
            
        }
    }
    
componentDidMount() {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((res) => this.setState({ item: res }))
      .catch((err) => err);
    
    
  };

    onFormSubmit = (newItem) => {
    this.setState({
     item: [newItem, this.props.item]
     })
    };  
    
render() {
          
        return(
            <div>
                 
                <Form onFormSubmit = {this.onFormSubmit}/>
    
                 {this.state.item.map((newItem) => {
        
        return(
         <ul>   
        <li key={newItem} />
          
       
        </ul>
        
        )
        
      })
    }
    
            </div>
            );
        }
    
          



}