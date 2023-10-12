import { type } from "os";
import React, { useState } from "react";
import Expense from './Expense';

type IncomeType = {
  name: "";
  amount: 0;
  date: Date;
}

type Prop = {
  setUserIncomeInput: React.Dispatch<React.SetStateAction<IncomeType>>

  }


function Income() {
  const [userInput, setUserInput] = useState({
    name: "",
    amount: 0,
    date: new Date(),
  });

  const [uesrEnformationList, setuesrEnformationList] = useState<
    { name: string; amount: number; date: Date }[]
  >([]);

  function getIncomeSource(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, name: event.target.value });
  }

  function getIncomeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setUserInput({ ...userInput, amount: Number(event.target.value) });
  }
  function getIncomeDate(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setUserInput({ ...userInput, date: new Date(event.target.value) });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setuesrEnformationList([...uesrEnformationList, userInput]);

    // Reset the userInput state to empty or default values
    setUserInput({ name: "", amount: 0, date: new Date() });
  }

  // we can use one function to all these values
  // const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
   // const {name,value} = event.target , put all the value you have based on name 
   // setUserInput ((prevInput)=>{
    //return {...prevInput, [name]:value};
    //});};
   
// create empty array to store the value fromuserInput
      //const [incomes , setIncomes]= useState<IncomeTypes[]>([])
       //const handleSubmit = (event:FormEvent)=>{
      //  event.preventDefault();
      //setUserInput return((prevInput)=>
      //return [...prevInput, incomes])} 
      // we can declare the type of array one time in file  and put:type IncomeExpenseTypes and import it  
    
  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor=" source">Income source:</label>
          <input
            type="text"
            name="Income source"
            placeholder="salary"
            value={userInput.name}
            onChange={getIncomeSource}
          />
        </div>

        <div>
          <label htmlFor="Amount"> Amount of Income:</label>

          <input
            type="number"
            name="Amount of Income "
            value={userInput.amount}
            onChange={getIncomeAmount}
          />
        </div>

        <div>
          <label htmlFor="incomeDate"> Date of Income:</label>

          <input
            type="date"
            name="Date of Income "
            value={userInput.date.toString()}
            onChange={getIncomeDate}
          />
        </div>
        <button>Add Income</button>
      </form>

      {uesrEnformationList.map((user, index) => (
        <div key={index}>
          <ul>
            <li>
              {user.name}:{user.amount}{user.date.toDateString()}
            </li>
          </ul>
          {/*we need to string to render the date to ensure that'not object */}
        </div>
      ))}
    </div>
  );
}

export default Income;
