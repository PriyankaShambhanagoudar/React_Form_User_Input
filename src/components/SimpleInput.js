import {  useState } from "react";

const SimpleInput = (props) => {
  //Using useRef hook
  //const nameInputRef = useRef();
  //Using usestate hook
  const [enteredName, setEnteredName] = useState("");
  //initially entered name is not valid so setting to false
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  //if we have 1 inputs
  //const enteredAgeIsValid =
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

 let formIsValid = false;
  //useEffect(() => {
    //if(enteredNameIsValid /** && enteredAgeIsValid */)
    if (enteredNameIsValid) {
      formIsValid=true;
    }
    //  else {
    //   formIsValid=false;
    // }
  //}, [enteredNameIsValid]);
  //[enteredNameIsValid /* enteredAgeIsValid */]

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    //use ref
    //current holds the value u  asigned to useRef
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //reseting the entered value using UseStae
    setEnteredName('');
    setEnteredNameTouched(false);

    //reseting the entredvalue using useRef
    //nameInputRef.current.value='';//Bad way  dont manipulate the dom
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          //ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled = { !formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
