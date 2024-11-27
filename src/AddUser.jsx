
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from './App';

const AddUser = () => {
    const { userData, setUserData } = useContext(userContext);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        website: ''
    });
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {      
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);                
            setUserData(response.data)
            setNewUser({
                name: '',
                username: '',
                email: '',
                website: ''
            });
            alert("User Created Successfully");
            navigate("/");
        } catch (error) {
            setError("There was an error creating the user. Please try again.");
            console.error(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-3">
                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {error && <div className="alert alert-danger">{error}</div>}
                                
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={newUser.name}
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
                                        value={newUser.username}
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
                                        value={newUser.email}
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
                                        value={newUser.website}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Add User
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
