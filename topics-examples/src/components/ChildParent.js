import React from 'react';

class Parent extends React.Component{
  constructor(props){
    super(props);

    this.state =  {
      'userName' : "Anon"
    }

    this.btnClick = this.btnClick.bind(this);
  }


  btnClick(e){
    userName = document.querySelector('input[type="text"]').value;
    console.log(`userName: ${userName}`);

    this.setState({
      'userName' : userName
    })

    document.querySelector('.output').innerHTML = userName;
  }

  render(){
      return (
        // HW: finish code to work:
        // The child component should call the btnClick() handler
        <Child />
      )
  }
}

function Child(props) {

    return(
        <div>
          <label>userName: <input type="text"/></label>
          <button onClick={btnClick}>OK</button>
          <div className="output">fff: {userName}</div>
        </div>
    )
}

export default Parent;