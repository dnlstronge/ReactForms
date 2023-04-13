import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  /* form is valid  */

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid]);

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
  };
  const handleBlur = (e) => {
    setEnteredNameTouched(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredNameTouched(false);
    setEnteredName("");
  };

  /* style : */

  const nameValid = nameInputIsValid ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
