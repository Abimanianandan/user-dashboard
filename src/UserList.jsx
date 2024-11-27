import React, { useContext } from 'react'
import { userContext } from './App'

const UserList = () => {
    const {userData} = useContext(userContext)
  return (
    <div>
    <h2>User List</h2>
    <ul>
        
        {userData.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
        ))}
    </ul>
</div>
  )
}

export default UserList
