import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //Using useRef hook 
  const nameInputRef = useRef();
  //Using usestate hook 
  const [enteredName, setEnteredName] = useState('');
  //initially entered name is not valid so setting to false
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    };

    setEnteredNameIsValid(true)

    console.log(enteredName);
    //use ref
    //current holds the value u  asigned to useRef
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //reseting the entered value using UseStae
    setEnteredName('');

    //reseting the entredvalue using useRef
    //nameInputRef.current.value='';//Bad way  dont manipulate the dom 
  };
  const nameInputClasses = enteredNameIsValid ? "form-control" : 'form-control invalid';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
