import { useReducer } from "react";

const initialInputState ={
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) =>{
    if(action.type === 'INPUT'){
        return{value:action.value, isTouched: state.isTouched};
    }
    if(action.type === 'BLUR'){
        return{ isTouched: true , value: state.value};
    }
    if(action.type === 'RESET'){
        return{ isTouched:false , value: ''}
        
    }
    return initialInputState
};
const useInput = (validateValue) => {
  const [inputState, dispatched]=  useReducer(inputStateReducer, initialInputState )

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;

  const valueChangeChandler = (event) => {
      dispatched({type : "INPUT", value:event.target.value});
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    //setIsTouched(true);
    dispatched({type : "BLUR"});

  };

  const reset=()=>{
      dispatched({type:'RESET'})
    //   setEnteredValue('');
    //   setIsTouched(false);
  }

  return {
    value: inputState.value,
    isValid :valueIsValid,
    hasError,
    valueChangeChandler,
    inputBlurHandler,
    reset,
  };

  //email



};

export default useInput;
