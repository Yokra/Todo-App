import React from "react";

export default class TodoList extends React.Component {
   state = {
        item:""
   };

  handleSubmit = (e) =>{
    
    let newItem = this.state.item;
    this.state.item.push(newItem);
    this.setState({item : this.state.newItem}); 
    const {onSubmitted} = this.props; 
    e.preventDefault();
     fetch("http://localhost:8080/todos", {
      method: 'POST',
      body: JSON.stringify({
             item: this.state.item
      }),
    
    }) 
      .then(res => res.json())
      .then((res) => onSubmitted(res))
      
      
          
};

handleChange(e) {
  this.setState({
      item: e.target.value
  });
}

render() {
    
  return (
          <form onSubmit =  {this.handleSubmit}>
          <input onChange = {e => this.setState({ item: e.target.value })}  placeholder="enter task" ></input>
          <button type="submit"> add</button>
          </form>               
  );
 } 
}     
        
  


   


