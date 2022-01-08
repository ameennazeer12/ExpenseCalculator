import React from 'react';
import { Expense } from './features/expense/Expense';
import './App.css';



function App() {
  return (
    <div className="container App">
      <h1 className='display-1'>Expense Calculator</h1>
      <Expense>
      </Expense>
    </div>
  );
}

export default App;
