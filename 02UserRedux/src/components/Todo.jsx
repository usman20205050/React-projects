import React, { useState } from 'react'
import { addtodo, removetodo } from '../reduxSlices/todoslice'
import { useDispatch , useSelector } from 'react-redux'

function Todo() {
    const [user, setuser] = useState('');
    const dispatch =  useDispatch();
    const submitButton= (e)=>{
        dispatch(addtodo({name: user}))
        e.preventDefault();
        console.log(e);
        setuser('')
    }
  return (
    <div>
       
        <input placeholder='enter your name' type='text' value={user} onChange={(e)=>setuser(e.target.value)}/>
     <button type='submit' onClick={submitButton}>Submint</button>
    
    </div>
  )
}
export default Todo
