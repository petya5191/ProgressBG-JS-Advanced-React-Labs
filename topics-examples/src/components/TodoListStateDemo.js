import React from 'react';
import Todo from "./Todo";
// import AddTodo from "./AddTodo";

export class TodoListStateDemo extends React.Component{

  constructor(){
    console.log('====================================');
    console.log(`Constructor() fired`);
    console.log('====================================');
    super();

    this.state = {
      'todos' :  [
        {'title': 'Todo 1', 'completed': false},
        {'title': 'Todo 2', 'completed': true},
        {'title': 'Todo 3', 'completed': false},
        {'title': 'Todo 4', 'completed': false},
      ]
    };

    this.newTodo =  {'title': 'Todo 5', 'completed': false}


    // ***** bind 'this' in addTodo():
    // this.addTodo = this.addTodo.bind(this);
    // ***** or with arrow function:
    this.addTodo = ()=>{
        console.log('====================================');
        console.log(`addTodo() fired`);
        console.log('====================================');

        // that would not work:
        // this.state.todos.push(this.newTodo);

        this.setState({
            'todos': this.state.todos.concat([this.newTodo]),
            'count': 5
        })

        // will not show the new state, because of the async nature of setState
        console.dir(this.state);
    }
  }


  render(){
    console.log('====================================');
    console.log(`render() fired`);
    console.log('====================================');
    return  (
          <div>
            <ul>
              {this.state.todos.map( todo =>
                <Todo title={todo.title} completed={todo.completed}/>
              )}
            </ul>
            <button onClick={this.addTodo}>AddTodo</button>
          </div>
        )
  }
}



