import React from "react";
import "../styles/Form.css";


const checkForm = (e) => {
  e.preventDefault();
  const inputName = document.getElementById('name');
  const inputAddress = document.getElementById('address');
  const inputPhone = document.getElementById('phone');
  const inputEmail = document.getElementById('email');
  const formMessage = document.getElementById('message');
  const regPhone = /[0-9]{9}/
  const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let formErrors = [];
  
  if (inputName.value.length < 3) {
    formErrors.push("Please fill in the name field correctly, must be at least 3 characters long");
  }
  
  if (inputAddress.value.length < 1) {
    formErrors.push("Please fill in the address field");
  }

  if (inputPhone.value) {
    if (!regPhone.test(inputPhone.value)) {
      formErrors.push("If you want to enter a phone number (not required) it must be 9 digits");
    }
  }

  if (inputEmail){
    if (!regEmail.test(inputEmail.value)) {
    formErrors.push("Please fill in the e-mail field correctly.");
    }
  } else{
      formErrors.push("E-mail is required.");
    }

  if (!formErrors.length) {
    formMessage.innerHTML = `
    <h3>Thank You for buying, have a nice day</h3>
    `;
   } else {
      formMessage.innerHTML = `
          <h3>Please correct all mistakes before sending:</h3>
          <ul>${formErrors.map(el => `<li>${el}</li>`).join("")}</ul>
      `;
  }
}

function Form() {

  return (
    <div className="form">
      <form className="form__container">
          <p className="form__text">Name *:</p>
          <input className="form__input" type="text" placeholder="Name Surname" id="name" required/>
          <p className="form__text">Address *:</p>
          <input className="form__input" type="text" placeholder="Example Street, 00-999 City" id="address" required/>  
          <p className="form__text">Phone:</p>
          <input className="form__input" type="tel" placeholder="123456789" id="phone"/>
          <p className="form__text">E-mail *:</p>
          <input className="form__input"  type="email" placeholder="example@sth.sth" id="email" required/>
          <button className="form__button" type="submit" onClick={checkForm}>Pay</button>
      </form>
      <div className="form__message" id="message"></div>
    </div>

  );
}

export default Form;
