import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef()
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(true)

  const handleEnteredName = (e) => {
    
    setEnteredName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(enteredName.trim() === '') {
      setIsValid(false)
      return;
    } else {
      
    }
    setIsValid(true)
    console.log(enteredName)
    console.log(nameInput.current.value)
    setEnteredName("")
  }

  const nameValid = isValid ? "form-control" : " form-control invalid"
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameValid}>
        <label htmlFor="name">Your Name</label>
        <input value={enteredName} ref={nameInput} onChange={handleEnteredName} type="text" id="name" />
        {!isValid &&
      <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className="form-actions">
      
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
