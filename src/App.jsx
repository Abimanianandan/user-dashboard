import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDetails from './UserDetails'
import AddUser from './AddUser'
import EditUser from './EditUser';

export const userContext = createContext();

const App = () => {
  const[userData,setUserData] = useState([]);
  return (
    <BrowserRouter>
    <userContext.Provider value={{userData,setUserData}}>
      <Routes>
        <Route path="/" element={<UserDetails />}/>
        <Route path="/add" element={<AddUser />}/>
        <Route path="/:id" element={<EditUser />}/>
      </Routes>
      </userContext.Provider>
    </BrowserRouter>
  )
}

export default App