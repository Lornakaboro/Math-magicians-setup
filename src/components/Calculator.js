import React from 'react';

function Calculator() {
  return (
    <CalculatorUi />
  );
}

const CalculatorUi = () => {
  const digits = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 3, 2, 1, 0, '.'];

  const operators = ['÷', 'X', '-', '+', '='];

  const digitButtons = digits.map((digit) => (
    <button className="digit-btn" key={digit} type="button">{digit}</button>
  ));

  const operatorButtons = operators.map((operator) => (
    <button className="press-btn amber" key={operator} type="button">{operator}</button>
  ));

  return (
    <div className="calculator">
      <div>
        <input placeholder="0" className="result" />
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
        <button type="button" className="btn-o">{digits[12]}</button>
        <button type="button" className="digit-btn">{digits[13]}</button>
        {operatorButtons.slice(4, 5)}
      </div>
    </div>
  );
};

export default Calculator;
