import React from 'react';
import './reset.css'
import './App.css';
import Header from './Components/Header'
import EmployeeCards from './Components/EmployeeCards'
import EmployeeHighlight from './Components/EmployeeHighlight'

function App() {
  return (
    <div className="App">
      <Header random={'Lucas'}/>
      <div className='landing'>
        <EmployeeCards/>
        <EmployeeHighlight/>
      </div>
    </div>
  );
}

export default App;
