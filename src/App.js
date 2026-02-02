import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="counter">{counter}</div>
        <button
          onClick={() => setCounter(counter - 1)}
          disabled={disabled}
          data-testid="minus-button"
        >
          -
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          disabled={disabled}
          data-testid="plus-button"
        >
          +
        </button>
        <div>
          <button
            style={{ backgroundColor: 'blue' }}
            onClick={() => {
              setDisabled(!disabled);
            }}
            data-testid="on/off-button"
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
