import './App.css';
import { useState } from "react";
import { mathjs }

function App() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(null);

  const poschitat = (operator) => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case 'clear':
        setNumber1("");
        setNumber2("");
        setResult(null);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div>
        <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} placeholder="Поле для ввода" />
        <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Поле для ввода" />
      </div>

      <div>
        <button onClick={() => poschitat('+')}> + </button>
        <button onClick={() => poschitat('-')}> - </button>
        <button onClick={() => poschitat('/')}> / </button>
        <button onClick={() => poschitat('*')}> * </button>
        <div>
          <button onClick={() => poschitat('clear')}> Clear </button>
        </div>
      </div>
      <h2>
        Результат: {result}
      </h2>
    </div>

  );
}

export default App;
