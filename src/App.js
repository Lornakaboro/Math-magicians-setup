import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import QuoteGenerator from './components/Quote';

function App() {
  return (
    <div className="App">
      <Calculator />
      <QuoteGenerator />
    </div>
  );
}

export default App;
