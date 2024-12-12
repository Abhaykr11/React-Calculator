import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');

  const handleClick = (value) => {
    if (operator === '') {
      setNum1((prev) => prev + value);
    } else {
      setNum2((prev) => prev + value);
    }
  };

  const handleOperation = (op) => {
    if (num1 === '') return;
    setOperator(op);
  };

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let calculation;
    switch (operator) {
      case '+':
        calculation = n1 + n2;
        break;
      case '-':
        calculation = n1 - n2;
        break;
      case '*':
        calculation = n1 * n2;
        break;
      case '/':
        calculation = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        calculation = 'Invalid operation';
    }
    setResult(calculation);
  };

  const clearInputs = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 p-10 border-2 border-gray-300 rounded-lg bg-gray-100">
        <div className="mb-6">
          <label className="font-bold" htmlFor="num1">Enter Number 1</label>
          <input 
            type="text" 
            name="num1" 
            id="num1" 
            className="w-full p-2 mt-1 mb-4 border rounded border-gray-300" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            disabled={operator !== ''}
          />

          <label className="block font-bold" htmlFor="num2">Enter Number 2</label>
          <input 
            type="text" 
            name="num2" 
            id="num2" 
            className="w-full p-2 mt-1 mb-4 border rounded border-gray-300" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            disabled={operator === ''}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('7')}>7</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('8')}>8</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('9')}>9</button>
          <button type="button" className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleOperation('+')}>+</button>

          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('4')}>4</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('5')}>5</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('6')}>6</button>
          <button type="button" className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleOperation('-')}>-</button>

          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('1')}>1</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('2')}>2</button>
          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={() => handleClick('3')}>3</button>
          <button type="button" className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleOperation('*')}>*</button>

          <button type="button" className="p-4 bg-gray-600 text-white rounded hover:bg-gray-700 col-span-3" onClick={() => handleClick('0')}>0</button>
          <button type="button" className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleOperation('/')}>/</button>

          <button type="button" className="p-4 bg-green-600 text-white rounded hover:bg-green-700 col-span-4" onClick={calculate}>=</button>

          <button type="button" className="p-4 bg-red-600 text-white rounded hover:bg-red-700 w-32" onClick={clearInputs}>Clear</button>
        </div>

        <div className="mt-4">
          <p className="font-bold">Result: <span>{result}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
