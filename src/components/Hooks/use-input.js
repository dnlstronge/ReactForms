import { useState } from "react";


const useInput = () => {
    const [enteredVlaue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    
    /* inferred state */
    const valueIsValid = enteredName.trim() !== "";
    const hasError = !enteredNameIsValid && enteredNameTouched;
}

export default useInput;