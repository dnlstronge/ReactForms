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

  const handleBlur = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("")
    setIsTouched(false)
  }

    
    return {
        value: enteredValue,
        isalid: valueIsValid,
        hasError,
        handleValueChange,
        handleBlur,
        reset

    }
}

export default useInput;