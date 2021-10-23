//import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:entredNameIsValid,
    hasError: nameInputHasError,
    valueChangeChandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput,
  } = useInput(value => value.trim() !=="");

  //email 
  const {
    value: enteredEmail,
    isValid:entredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeChandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput,
  }=useInput(value=>value.includes('@'));
  //Using useRef hook
  //const nameInputRef = useRef();
  //Using usestate hook


  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //initially entered name is not valid so setting to false
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);


  //email
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
 


  //email
  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  //useEffect(() => {
  //if(enteredNameIsValid /** && enteredAgeIsValid */)
  if (entredNameIsValid && entredEmailIsValid) {
    formIsValid = true;
  }
  //  else {
  //   formIsValid=false;
  // }
  //}, [enteredNameIsValid]);
  //[enteredNameIsValid /* enteredAgeIsValid */]

  //E-mail
  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  //name

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

   //setEnteredNameTouched(true);

    //email
    //setEntreedEmailTouchedd(true)

    if (!entredNameIsValid) {
      return;
    }
    console.log(enteredName);

    //console.log(enteredEmail);
    //use ref
    //current holds the value u  asigned to useRef
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //reseting the entered value using UseStae
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();

    //email
    resetEmailInput();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);

    //reseting the entredvalue using useRef
    //nameInputRef.current.value='';//Bad way  dont manipulate the dom
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  //email
  const EmailInputClasses = emailInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      {/* email */}
      <div className={EmailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid E-mail.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
