import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import { userContext } from './App';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const[deleteUser,setDeleteUser] = useState([])
    const{userData,setUserData} = useContext(userContext);
    
    useEffect(()=>{
        fetchData()
    },[deleteUser])

    const fetchData = async() =>{
       try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUserData(response.data)
       } catch (error) {
         console.log(error.message);        
       }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            alert("User Deleted Successfully");
            setUserData(prevData => prevData.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error.message);
        }
    };

  return (
    <div className="container">
        <Navbar/>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
      <ul>
        {userData.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
        ))}
    </ul>
        {/* {userData.map((item,index)=>{
            return(
                <div className="col" key={index}>
                <div className="card hover shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="card-header">
                    <h5 className="card-title text-center">ID: {item.id}</h5>        
                    </div>
                  <div className="card-body user">
                    <p className="card-text">Name: {item.name}</p>
                    <p className="card-text">UserName: {item.username}</p>
                    <p className="card-text">Email: {item.email}</p>
                    <p className="card-text">Company Bs: {item.website}</p>
                    <div className="d-flex gap-3">
                    <Link to={`/${item.id}`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
        })} */}
      </div>
    </div>
  );
}

export default UserDetails