import React, {useState} from 'react';
import Parent from './parent';
import CounterContext from './counterContext';
import counterReducer from './counterReducer';
import './App.css';

function App() {

  let countState = useState(1)

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
