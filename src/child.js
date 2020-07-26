import React, { useContext } from 'react';
import CounterContext from './counterContext';

const Child = () => {

    let counterValue = useContext(CounterContext)

    return (
        <div>
            <h2>This is first child using Counter Context</h2>            
            <h4>Counter value is: {counterValue}</h4>

            <button onClick={
                ()=> {
                    counterValue[1](++counterValue[0])}
                    }
            >
                Increment Context
            </button>
        </div>
    )
}
export default Child;