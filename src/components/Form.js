import React from "react";
import "../styles/Form.css";

function Form() {

  return (
    <div className="form__container">
        <p className="form__text">Name:</p>  
        <input className="form__input"/>
        <p className="form__text">Address:</p>  
        <input className="form__input"/>  
        <p className="form__text">Phone:</p>  
        <input className="form__input"/>
        <p className="form__text">E-mail:</p>  
        <input className="form__input"/>
        <button>Pay</button>
    </div>
  );
}

export default Form;
