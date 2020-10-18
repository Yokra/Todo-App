const express = require("express"); //including a library
const app = express(); //inxstentiating the library
const cors = require("cors"); //to allow cross-origin requests

//set up express to be able to pass JSON as a body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let todoTasks = [];


//Read
//takes us to the root(/) URL
//getting all todos: GET  /todos
app.get("/todos", (req, res) => {
return res.send( todoTasks );
});

//Create
//adding a new todo: POST /todos
app.post("/todos", (req, res) => {
console.log(req.body);
let createNewTodo = req.body;
todoTasks.push(createNewTodo);
return res.send(createNewTodo);   
});

//updating a todo 
app.patch("/todos/:id", (req, res) => {
  todos = todos.map(item => {
    if (item.id === Number(req.params.id)) {

      return { item: req.body.item, id: item.id };
    }
    return item;
  });
  res.send({ todos });
});


//deletign a todo with matching id: DELETE /todos/:id
app.delete("/todos/:id", (req, res) => {
  const requestId = req.params.id;

  let updatedTodos = todoTasks.filter((updatedTodos) => {
    return updatedTodos.id == requestId;
  })[0];

  const index = todoTasks.indexOf(updatedTodos);

  todoTasks.splice(index, 1);

  return res.send({
    message: "Object" + "  " + requestId + "  " + "has been deleted",
  });
});

// environment variables PORT
// the way we can access it is process.env
//console.log(process.env.PORT);
const port = process.env.PORT || 80;

app.listen(8080, (error) => {
  if (error) {
    console.log("There is an error running the surver");
  } else {
    console.log("Server is running on port", port);
  }
});
