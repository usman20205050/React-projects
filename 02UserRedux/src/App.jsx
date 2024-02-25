import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { adduser } from './reduxSlices/userSlice'

function App() {
  const dispatch = useDispatch()
  function handelclick(){
    dispatch(adduser());
  }
  const statevalue = useSelector((state)=> state.users.value);
  return (  
    <>
    <h3>
    <h3>{statevalue}</h3>
      <button onClick={handelclick}>increment</button>
      I am live now
    </h3>
    </>
  )
}

export default App
