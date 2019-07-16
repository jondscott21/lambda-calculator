import React from "react";

const NumberButton = (props) => {
let data = `number${props.num.toString()}`
  return (
    <button key={props.num.toString()} data={data} className='number-button'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.num}
    </button>
  );
};

export default NumberButton;
