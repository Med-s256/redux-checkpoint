import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../js/action/ActionTask";

const AddTask = ({handleFilter, filter}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    const add=()=>{
        if(input)
        {
        dispatch(add_task({task: input, isDone: false, id: Math.random()}))
        setInput('')
        }
        else alert ('enter a valid task')
    }
  return (
    <div className='content'>
      <h1>LIST-TO-DO !!!</h1>
      <input type="text" placeholder="enter a new task" onChange={handleChange} value={input}></input>
      <div className='group-btn'>
        <button className='btn-a' onClick={add}>Add</button>
        <button className='btn-a' onClick={handleFilter}>{filter?'done':'All'}</button>
      </div>
    </div>
  );
};

export default AddTask;
