import { useState, useEffect } from "react";

import useInput from "./Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid, enteredNameIsValid,
    hasError: nameInputHasError,
    handleValueChange: nameChangedHandler,
    handleBlur: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");



  /* form is valid  */

  let formIsValid = false;
  if (enteredNameIsValid ) {
    formIsValid = true;
  }



  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    
    resetNameInput()
  
  
  };

  /* style : */

  const nameValid = nameInputHasError ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameValid}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameChangedHandler}
          type="text"
          id="name"
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Name cannot be empty</p>}
      </div>
   
        {/* {nameInputHasError && (
          <p className="error-text">Email cannot be empty</p>
        )} */}
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
