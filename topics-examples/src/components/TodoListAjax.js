import React from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export class TodoListAjax extends React.Component{

  constructor(){
    super();

    // this.state = {
    //   'todos' :  [
    //     {'title': 'Todo 1', 'completed': false},
    //     {'title': 'Todo 2', 'completed': true},
    //     {'title': 'Todo 3', 'completed': false},
    //     {'title': 'Todo 4', 'completed': false},
    //   ]
    // };

    this.state = {
      'todos': [],
      'loaded': false
    }

    this.fetchTodos = ()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => { this.setState({
          'todos': data,
          'loaded': true
          })
        })
    }
  }



  componentDidMount() {
    console.log('====================================');
    console.log(`componentDidMount fired`);
    console.log('====================================');
    this.fetchTodos();
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
    const {loaded, todos} = this.state;

    return  (
          <div>
            <AddTodo
              onAddTodo={this.addTodo}
              onGetTodo={this.getTodo}
            />
            <ul>
              { loaded ?
                todos.map( todo =>
                  <Todo  key={todo.id} title={todo.title} completed={todo.completed}/>
                )
                :
                <p>Not loaded</p>
              }
            </ul>
          </div>
        )
  }
}




