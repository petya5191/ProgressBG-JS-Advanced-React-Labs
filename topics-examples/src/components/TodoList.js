import React from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export class TodoList extends React.Component{

  constructor(){
    super();

    this.state = {
      'todos' :  [
        {'title': 'Todo 1', 'completed': false},
        {'title': 'Todo 2', 'completed': true},
      ]
    };
  }


  addTodo(todo){
    // this.state.todos.push(todo);
    console.log(todo);
  }

  getTodo(e){
    // this.state.todos.push(todo);
    console.log(e.target.value);
  }

  render(){
    const {todos} = this.state;

    return  (
          <div>
            <AddTodo
              onAddTodo={this.addTodo}
              onGetTodo={this.getTodo}
            />
            <ul>
              {
                todos.map( todo =>
                  <Todo  key={todo.id} title={todo.title} completed={todo.completed}/>
                )
              }
            </ul>
          </div>
        )
  }
}




