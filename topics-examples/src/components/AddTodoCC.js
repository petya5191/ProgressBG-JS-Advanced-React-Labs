import React from 'react';


class AddTodoCC extends React.Component{
  constructor(props){
    super(props);

    this.now = Date.now();

    // This problem solution 1: bind event handlers (RECOMMENDED):
    this.clickHandler = this.clickHandler.bind(this);

    // This problem solution 2: use arrow function (NOT RECOMMENDED):
    // this.clickHandler = ()=>{

    // }
  }

  clickHandler(e) {
    console.dir(e);

    let clickedAt = new Date(this.now+e.timeStamp);
    console.log(`${e.target.id} was clicked at ${clickedAt.toLocaleString()}`);
  }

  render(){
    return(
      <div>
        <input type="text"/>
        {/* <button id='btn2' onClick={this.clickHandler}>Add</button> */}
        <button id='btn2' onClick={(e)=>{this.clickHandler(e)} }>Add</button>
      </div>
    )
  }
}

export default AddTodoCC;



