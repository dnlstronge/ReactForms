import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef()
  const [enteredName, setEnteredName] = useState("");

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(enteredName.length > 0) {
      console.log(enteredName)
      console.log(nameInput.current.value)
      setEnteredName("")
    }
   
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input value={enteredName} ref={nameInput} onChange={handleEnteredName} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
