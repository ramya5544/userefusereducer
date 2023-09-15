import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const[state,dispatch]=useReducer(ReducerAction, {count:0})
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={()=>{dispatch({type:"ADD",payload:5})}}>ADD</button>
            
            <button onClick={()=>{dispatch({type:"SUB",payload:2})}}>SUB</button>
        </div>
    );
};

export default UseReducer;