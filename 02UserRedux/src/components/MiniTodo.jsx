import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function MiniTodo() {
    const selector = useSelector((state)=>state.todo);
    console.log(selector)
  return (
    <div>
      {selector.length === 0 ? (
                <h3>List of users</h3>
            ) : (
                selector.map((user, index) => (
                    <h3 key={index}>{user.name}</h3>
                ))
            )}
    </div>
  )
}

export default MiniTodo
