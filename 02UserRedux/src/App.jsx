import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { adduser, deleteuser, removealluser } from './reduxSlices/userSlice'
import { fakeuser } from './index.js'
import {MdDeleteForever} from "react-icons/md" 
import Todo from './components/Todo.jsx'
import MiniTodo from './components/MiniTodo.jsx'

function App() {

  const dispatch = useDispatch()
  function handelclick(payload){
    dispatch(adduser(payload))
  }
  function handeldeleteuser(name){
    dispatch(deleteuser(name))
  
  }
  const handleallusers= ()=>{
    console.log("removealuser")
    dispatch(removealluser())
  }

  const statevalue = useSelector((state)=> state.users);

  return (  
    <>
     <button onClick={()=>handelclick(fakeuser())}>increment</button>
    {statevalue.map((name , index)=>{
      return  <><li key={index}>{name} 
            <button className='deletecolor ' onClick={()=>handeldeleteuser(name)}>
              <MdDeleteForever/>
            </button>
      </li>
    </>
    }
    )}
  <button onClick={handleallusers}>Clear All</button>
  <Todo/>
  <MiniTodo/>
    </>
  )
}

export default App
