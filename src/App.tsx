import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [value, setValue] = useState(0)

  const maxValue = 5;

  const increment = () => {
    value < maxValue && setValue(value + 1)     
  }
  const reset = () => {
    setValue(0)
  }

  return (
    <div className="App">
      <div className="counter">
        <Counter value={value}
           increment={increment}
           reset={reset}
           maxValue={maxValue}
          />
      </div>

    </div>
  );
}

export default App;
