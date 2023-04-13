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
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input value={enteredName} ref={nameInput} onChange={handleEnteredName} type="text" id="name" />
      </div>
      <div className="form-actions">
      {!isValid &&
      <p>Please enter a valid name</p>}
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
