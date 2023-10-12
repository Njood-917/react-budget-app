import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './components/Income';
import Expense from './components/Expense';
import Target from './components/Target';
import TransferForSaving from './components/TransferForSaving';
import Child1 from './Child1';
// import Child2 from './Child2';
// import Example from './components/Example';

function App() {
// const getMessage = (message:string)=>{ // example about pss data from child to child
//   console.log(message)
// }
const [userIncomeInput, setUserIncomeInput] = useState({
  name: "",
  amount: 0,
  date: new Date(),
});


  return (
    <div className="App">
      
      <Income/>
      <Expense/>
       <Target/> 
       <TransferForSaving/>
 

      {/* <Example/> */}

      {/* <Child1 getMessage={getMessage}/> */}
      {/* <Child2/> */}
      
    </div>
  );
}

export default App;
