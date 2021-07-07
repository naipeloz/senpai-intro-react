import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      color : 'bg-red-500',
    }
  }

  handleLogin = () => {
    console.log("Click on login")
  }

  render () {
    return (
      <div className="bg-red-500 p-4 w-full">
        <Button   
          actionName="Login"
          buttonColor="bg-purple-200"
          handleClick={ this.handleLogin }
        />
        <Button   
          actionName="Logout"
          buttonColor="bg-yellow-200"
          handleClick={ () => {console.log("Click on logout")} }
        />
      </div>
    )
  }
}

export default Header;
