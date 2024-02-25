import React from 'react'
import {useSelector} from "react-redux"
function Counter() {
  const username = useSelector(state=>state.counter.user.username)
  const password = useSelector(state=>state.counter.user.password)
  const email = useSelector(state => state.counter.user.email)
  return (
    <div>
      <h3>The username is {username}</h3>
      <h3>The password is {password}</h3>
      <h3>The password is {email}</h3>
    </div>
  )
}

export default Counter
