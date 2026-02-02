import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>
        <div className="counter-display" data-testid="counter">
          {counter}
        </div>
        <div className="button-group">
          <button
            className="control-btn minus-btn"
            onClick={() => setCounter(counter - 1)}
            disabled={disabled}
            data-testid="minus-button"
          >
            -
          </button>
          <button
            className="control-btn plus-btn"
            onClick={() => setCounter(counter + 1)}
            disabled={disabled}
            data-testid="plus-button"
          >
            +
          </button>
        </div>
        <div className="settings-group">
          <button
            className="on-off-btn"
            onClick={() => {
              setDisabled(!disabled);
            }}
            data-testid="on/off-button"
          >
            {disabled ? 'on' : 'off'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
