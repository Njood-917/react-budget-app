import React, {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './components/Income';
import Expense from './components/Expense';
import Target from './components/Target';
import TransferForSaving from './components/TransferForSaving';
import { IncomeType } from "./types/types"
import Child1 from './Child1';

// import Child2 from './Child2';
// import Example from './components/Example';

function App() {
  const [savingAmount , setSavingAmount]= useState(0); // when you pass data you need to store the new data 
const getTransferAmount = (amount:number)=>{ // example about pass data from child to child , create function in parent
  setSavingAmount(amount)
}
// from income component 
const [uesrEnformationList, setuesrEnformationList] = useState<IncomeType[]>(
  []
);
// from income component 
const [userInput, setUserInput] = useState({
  name: "",
  amount: 0,
  date: new Date(),
});



// const [userIncomeInput, setUserIncomeInput] = useState({
//   name: "",
//   amount: 0,
//   date: new Date(),
// });
const [balance , setBalance]=useState(0)
const calculateBalance = (): void => {
  const incomeAmount = uesrEnformationList.reduce((total, info) => total + info.amount, 0);
  const expenseAmount = userInput.reduce((total, info) => total + info.amount, 0);
 
  const calculatedBalance = incomeAmount - expenseAmount - savingAmount;
  setBalance(calculatedBalance);
};
useEffect(calculateBalance, [uesrEnformationList,userInput, savingAmount]);


  return (
    <div className="App">
      
      <Income/>
      <Expense/>
       <Target savingAmount={savingAmount}/> 
       <TransferForSaving getTransferAmount={getTransferAmount}
       balance={balance}
       />    {/* pass the function in child and props  */}
       

      {/* <Example/> */}

      {/* <Child1 getMessage={getMessage}/> */}
      {/* <Child2/> */}
      
    </div>
  );
}

export default App;
