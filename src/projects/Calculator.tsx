import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  return (
    <div className="max-w-xs mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="bg-gray-700 p-4 rounded mb-4">
        <div className="text-gray-400 text-sm h-6">{equation}</div>
        <div className="text-white text-2xl text-right">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button onClick={clear} className="col-span-2 bg-gray-600 text-white p-3 rounded">
          AC
        </button>
        <button onClick={() => handleOperator('/')} className="bg-orange-500 text-white p-3 rounded">
          ÷
        </button>
        <button onClick={() => handleOperator('*')} className="bg-orange-500 text-white p-3 rounded">
          ×
        </button>

        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="bg-gray-600 text-white p-3 rounded"
          >
            {num}
          </button>
        ))}

        <button onClick={() => handleOperator('-')} className="bg-orange-500 text-white p-3 rounded">
          -
        </button>
        <button onClick={() => handleOperator('+')} className="bg-orange-500 text-white p-3 rounded">
          +
        </button>

        <button
          onClick={() => handleNumber('0')}
          className="col-span-2 bg-gray-600 text-white p-3 rounded"
        >
          0
        </button>
        <button onClick={() => handleNumber('.')} className="bg-gray-600 text-white p-3 rounded">
          .
        </button>
        <button onClick={calculate} className="bg-orange-500 text-white p-3 rounded">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;