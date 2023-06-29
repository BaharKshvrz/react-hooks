import  { useCallback, useState } from 'react'

const useStateWithValidation = (validationFunc, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state))
 
  const onChange = useCallback(
    // nextStage is the value of input
     nextStage => {
        const value = typeof nextStage === "function" ? nextStage(state) : nextStage;
        setState(value);
        setIsValid(validationFunc(value));
     },
     [validationFunc, state]
  )

  return [state, onChange, isValid]
}

export default useStateWithValidation
