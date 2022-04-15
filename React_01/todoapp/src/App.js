import { Component } from "react";
import Todos from './Todos';
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Take Pill Zenoxa OD 450mg'},
      {id: 2, content: 'Take Pill Zonimid 100mg'},
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addForm = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
}
  render(){
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Take Your Pill</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddForm addForm={this.addForm} />  
      </div>
    )

  }
  ;
}

export default App;
