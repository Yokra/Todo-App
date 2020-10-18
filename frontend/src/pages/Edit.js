/* import React from "react";


export default class Edit extends React.Component {
   state = {
        item:[],
   };
   
 
  handleChange =  (e) => {
      
const { addTask, updatedItem } = this.props;

    e.preventDefault();
    fetch("http://localhost:8080/todos/" + updatedItem, {
      method: 'PATCH',
      headers: {
        'Access-Control-Allow-Origin':  'http://127.0.0.1:3000/todos',
        'Access-Control-Allow-Methods': 'PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.item), //({item: this.state.item})
    })
    .then(res => res.json())
    .then(res => addTask(res))
    //this.props.addTask(newItem);
    this.setState({ item: ""});
      
    console.log(this.state.item)

      
 
    };            


handleChange = (e)  =>{
  this.setState({ [e.target.name]: e.target.value });
}


render() {
    
  return (
          
          <div>
          
          <input name="item" defaultValue={todos.item} type="text" onChange={ (e) => this.handleChange(e.target.value, todos.id)}/>
          <button type="submit"> Edit </button>
          </div>
           
          
                
                  
  );
 } 
}     
        
  


   


 */