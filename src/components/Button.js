import React from 'react';

const Button = (props) => {
  return(
    <div className={`${props.buttonColor} p-4 w-24`} onClick={props.handleClick}>
      <button>{ props.actionName }</button>
    </div>
  )
}

export default Button;
