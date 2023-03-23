import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [object, setObject] = useState(
    {
      total: 0,
      next: '',
      operation: '',
    },
  );

  const stateChange = (e) => {
    setObject(calculate(object, e.target.textContent));
  };

  const digits = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 3, 2, 1, 0, '.'];

  const operators = ['÷', 'x', '-', '+', '='];

  const digitButtons = digits.map((digit) => (
    <button className="digit-btn" key={digit} type="button" onClick={stateChange}>{digit}</button>
  ));

  const operatorButtons = operators.map((operator) => (
    <button className="press-btn amber" key={operator} type="button" onClick={stateChange}>{operator}</button>
  ));
  return (
    <div className="calculator">
      <div className="result">
        <span>
          {object.total}
          {object.operation}
          {object.next}
        </span>
      </div>
      <div className="digits">
        {digitButtons.slice(0, 3)}
        {operatorButtons.slice(0, 1)}
      </div>
      <div className="digits">
        {digitButtons.slice(3, 6)}
        {operatorButtons.slice(1, 2)}
      </div>
      <div className="digits">
        {digitButtons.slice(6, 9)}
        {operatorButtons.slice(2, 3)}
      </div>
      <div className="digits">
        {digitButtons.slice(9, 10)}
        {digitButtons.slice(10, 12)}
        {operatorButtons.slice(3, 4)}
      </div>
      <div className="operators">
        <button type="button" className="btn-o" onClick={stateChange}>{digits[12]}</button>
        <button type="button" className="digit-btn" onClick={stateChange}>{digits[13]}</button>
        {operatorButtons.slice(4, 5)}
      </div>
    </div>

  );
}

export default Calculator;
