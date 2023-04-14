import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("")

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  /* validation */

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  
  const enteredEmailIsValid = enteredEmail.trim().includes("@");
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched

  /* form is valid  */

  let formIsValid = false 
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
  };

  const handleEnteredEmail = (e) => {
    setEnteredEmail(e.target.value)
  }
  const handleBlur = (e) => {
    setEnteredNameTouched(true);
  };
  const handleBlurEmail = (e) => {
    setEnteredEmailTouched(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false)
    setEnteredName("");
    setEnteredEmail("")
  };

  /* style : */

  const nameValid = nameInputIsValid ? "form-control invalid" : "form-control";
  const emailValid = emailInputIsValid ? "form-control invalid": "form-control"

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameValid}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={handleEnteredName}
          type="text"
          id="name"
          onBlur={handleBlur}
        />
        {nameInputIsValid && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className={emailValid}>
        <label htmlFor="name">Your email</label>
        <input
          value={enteredEmail}
          onChange={handleEnteredEmail}
          type="text"
          id="name"
          onBlur={handleBlurEmail}
        />
        {nameInputIsValid && <p className="error-text">Email cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
