import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
    if (enteredName.trim() !== "") {
      setIsValid(true);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsValid(false);

      return;
    }

    setIsValid(true);
    console.log(enteredName);
    // console.log(nameInput.current.value);
    setEnteredName("");
  };
  const handleBlur = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsValid(false);
    }
  };
  useEffect(() => {
    if (isValid) {
      console.log("Valid input detetected");
    }
  }, [isValid]);
  const nameIsValid = !isValid && enteredNameTouched;
  const nameValid = nameIsValid ? "form-control invalid" : " form-control";

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameValid}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={nameInput}
          onChange={handleEnteredName}
          type="text"
          id="name"
          onBlur={handleBlur}
        />
        {nameIsValid && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
