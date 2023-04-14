import { useState } from "react";


const useInput = ( validateValue ) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    
    /* inferred state */
    const valueIsValid = validateValue(enteredValue) // validtion function
    const hasError = !valueIsValid && isTouched;


  const handleValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleIsTouched = (e) => {
    setIsTouched(true);
  };


    
    return {
        value: enteredValue,
        hasError,

    }
}

export default useInput;