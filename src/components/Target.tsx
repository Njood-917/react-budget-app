import React, {FormEvent, useState , ChangeEvent} from "react";

function Target() {
 
const [target , setTarge]=useState(0)
  function onChangeHandler (event:ChangeEvent<HTMLInputElement>){
    // console.log(event.target.value); //i can get the value from user from event.target.value 
    setTarge(Number(event.target.value)) // we put Number to return number bc the initial value 0
    }
   
      function handleSubmit(event:FormEvent){
        event.preventDefault();
        setTarge(0); // to return the input empty
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Target:</label>
        <input type="number" 
        onChange={onChangeHandler}
        value={target} 
       
        />

        <button>Reset</button>
      </form>


      <div> 
        <p>Target:{target}</p>
        <p>Current Saving :100</p>
        <progress  max={2000} value={20}></progress>
       
        </div>
    </div>
  );
  }

export default Target;
