import React, {useState} from "react";

function Target() {

  const [userInput, setUserInput] = useState("");
  function onChangeHolder (event:React.ChangeEvent<HTMLInputElement>){
    // console.log(event.target.value); //i can get the value from user from event.target.value 
            setUserInput(event.target.value)
    }
   
      
  return (
    <div>
      <form >
        <label htmlFor="">Target:</label>
        <input type="number" onChange={onChangeHolder} />

        <button>Reset</button>
      </form>

      <div>{userInput}</div>
    </div>
  );
}

export default Target;
