import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import {  useDispatch } from 'react-redux'
import {addnum, subnum} from './redux/counterSlice'
function App() {
  const dispatch = useDispatch();
  return (
   <>
   <Counter/>
  <button onClick={()=>dispatch(addnum())}>increment</button>
  <button onClick={()=>dispatch(subnum())}>decrement</button>
   </>
  )
}

export default App
