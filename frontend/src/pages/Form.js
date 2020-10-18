import React from "react";


export default class Form extends React.Component {
   state = {
        item:[],
   };
   
 
  handleSubmit =  (e) => {
      const newItem = {
      item: this.state.item,
      id: Date.now()
    };   

     /* this.setState(newItem => ({
      item: [newItem.item]
  }))  */  
    
   const { addTask } = this.props;

    e.preventDefault();
    fetch("http://localhost:8080/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem), //({item: this.state.item})
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
          
          <form  onSubmit = {this.handleSubmit}  >
          <input onChange = {this.handleChange} value={this.state.item} placeholder="enter task" name="item"></input> 
          <button type="submit"> add </button>
          </form>
           
          
                
                  
  );
 } 
}     
        
  


   


