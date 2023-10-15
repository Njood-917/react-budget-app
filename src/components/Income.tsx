import { type } from "os";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Expense from "./Expense";
import IncomeItem from "./IncomeItem";
import {IncomeType} from '../types/types'



type Prop = {
  setUserIncomeInput: React.Dispatch<React.SetStateAction<IncomeType>>;
};

export default function Income() {
  const [userInput, setUserInput] = useState<IncomeType>({
    name: "",
    amount: 0,
    date: new Date(),
    id: uuidv4(),
  });

  const [uesrEnformationList, setuesrEnformationList] = useState<IncomeType[]>(
    []
  );

  function getIncomeSource(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, name: event.target.value });
  }

  function getIncomeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, amount: Number(event.target.value) });
  }
  function getIncomeDate(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, date: new Date(event.target.value) });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const newIncome = {...userInput,id:uuidv4()} // generate unique id to delet just one item inside an array not all the items
    setuesrEnformationList([...uesrEnformationList, userInput]);

    console.log(userInput);

    // Reset the userInput state to empty or default values
    setUserInput({ name: "", amount: 0, date: new Date(), id: "" });
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

      {uesrEnformationList.map((user) => {
        return <IncomeItem user={user}  uesrEnformationList={uesrEnformationList} setuesrEnformationList={setuesrEnformationList}/>;
      })}
    </div>
  );
}
