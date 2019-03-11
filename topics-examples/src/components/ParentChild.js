import React from 'react';

class Parent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      userName: 'Pesho'
    }

  }

  render(){
      return (
        <Child userName={this.state.userName}/>
      )
  }
}

function Child(props) {
    return(
        <div>
          <p>Hello, {props.userName}</p>
        </div>
    )
}

export default Parent;