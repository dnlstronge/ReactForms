import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef()
  const [enteredName, setEnteredName] = useState("");

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    //console.log(enteredName)
    console.log(nameInput.current.value)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input  ref={nameInput} onChange={handleEnteredName} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
