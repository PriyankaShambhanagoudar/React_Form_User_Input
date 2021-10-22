import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //Using useRef hook 
  const nameInputRef = useRef();


  //Using usestate hook 

  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(enteredName.trim() === ""){
      return;
    }

    console.log(enteredName);
    //use ref
    //current holds the value u  asigned to useRef
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //reseting the entered value using UseStae
    setEnteredName('');

    //reseting the entredvalue using useRef
    //nameInputRef.current.value='';//Bad way  dont manipulate the dom 
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
