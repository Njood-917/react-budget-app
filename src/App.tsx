import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './components/Income';
import Expense from './components/Expense';
import Target from './components/Target';

function App() {
  return (
    <div className="App">
      
      <Income/>
      <Expense/>
      <Target/>
     
    </div>
  );
}

export default App;
