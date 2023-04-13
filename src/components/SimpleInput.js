import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const handleEnteredName = (e) => {
    setEnteredName(e.target.value);
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input onChange={handleEnteredName} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
