import useInput from "../hooks/use-input";

const isNotEmpty=(value) => value.trim() !== "";
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  //FirstName
  const {
    value: enteredFirstName,
    isValid: entredFirstNameIsValid,
    hasError: FirstnameInputHasError,
    valueChangeChandler: FirstnameChangeHandler,
    inputBlurHandler: FirstnameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  //LasttName
  const {
    value: enteredLastName,
    isValid: entredLastNameIsValid,
    hasError: LastnameInputHasError,
    valueChangeChandler: LastnameChangeHandler,
    inputBlurHandler: LastnameBlurHandler,
    reset: resetLastNameInput,
  } =  useInput(isNotEmpty);

    //Email
    const {
      value: enteredEmailName,
      isValid: entredEmailIsValid,
      hasError: EmailInputHasError,
      valueChangeChandler: EmailChangeHandler,
      inputBlurHandler: EmailBlurHandler,
      reset: resetEmailNameInput,
    } = useInput(isEmail);

  let formIsValid = false;
  if (entredFirstNameIsValid && entredLastNameIsValid &&entredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('Submitted');
    console.log(enteredFirstName,enteredLastName,enteredEmailName);

    resetFirstNameInput("");
    resetLastNameInput("");
    resetEmailNameInput('');
  };

  const FirstnameInputClasses = FirstnameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const LastnameInputClasses = LastnameInputHasError
    ? "form-control invalid"
    : "form-control ";

    const EmailInputClasses = EmailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* FirstName */}
      <div className="control-group">
      <div className={FirstnameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={FirstnameChangeHandler}
          onBlur={FirstnameBlurHandler}
          value={enteredFirstName}
        />
        {FirstnameInputHasError && (
          <p className="error-text">Please enter a first name .</p>
        )}
      </div>

      {/* LasttName */}
      <div className={LastnameInputClasses}>
        <label htmlFor="name">Last name </label>
        <input
          type="text"
          id="name"
          onChange={LastnameChangeHandler}
          onBlur={LastnameBlurHandler}
          value={enteredLastName}
        />
        {LastnameInputHasError && (
          <p className="error-text">Please enter a last name .</p>
        )}
      </div>
      </div>

      {/* Email */}
      <div className={EmailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={enteredEmailName}
        />
        {EmailInputHasError && (
          <p className="error-text">Please enter a Valid email address.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
