import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div>
          <input placeholder="0" className="result" />
        </div>
        <div className="digits">
          <button type="button" className="digit-btn">AC</button>
          <button type="button" className="digit-btn">+/-</button>
          <button type="button" className="digit-btn">%</button>
          <button type="button" className="press-btn amber">÷</button>
        </div>
        <div className="digits">
          <button type="button" className="digit-btn">7</button>
          <button type="button" className="digit-btn">8</button>
          <button type="button" className="digit-btn">9</button>
          <button type="button" className="press-btn amber">X</button>
        </div>
        <div className="digits">
          <button type="button" className="digit-btn">6</button>
          <button type="button" className="digit-btn">5</button>
          <button type="button" className="digit-btn">4</button>
          <button type="button" className="press-btn amber">-</button>
        </div>
        <div className="digits">
          <button type="button" className="digit-btn">3</button>
          <button type="button" className="digit-btn">2</button>
          <button type="button" className="digit-btn">1</button>
          <button type="button" className="press-btn amber">+</button>
        </div>
        <div className="operators">
          <button type="button" className="btn-o">0</button>
          <button type="button" className="press-btn">.</button>
          <button type="button" className="press-btn amber">=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
