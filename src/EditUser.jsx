import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [editUser, setEditUser] = useState({
    name: "",
    username: "",
    email: "",
    website: ""
  });
  
  const [error, setError] = useState(""); 

  useEffect(()=>{
    fetchData()
  },[])

 
  
  const fetchData = async() =>{
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setEditUser(response.data)
    } catch (error) {
        console.log(error.message);    
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, editUser)   
      alert("User Updated Successfully");  
      setEditUser({
        id: "",
        name: "",
        username: "",
        email: "",
        website: ""
      }); 
      navigate("/");   
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
  };
  

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-4 offset-md-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={editUser.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={editUser.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={editUser.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  value={editUser.website}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Edit User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditUser