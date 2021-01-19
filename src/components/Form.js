import React from "react";
import "../styles/Form.css";

function Form() {

  return (
    <div className="form__container">
        <p>Name:</p>  
        <input/>
        <p>Address:</p>  
        <input/>  
        <p>Phone:</p>  
        <input/>
        <p>E-mail:</p>  
        <input/>
        <button>Pay</button>
    </div>
  );
}

export default Form;
