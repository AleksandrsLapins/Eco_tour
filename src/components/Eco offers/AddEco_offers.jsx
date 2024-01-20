import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import './addeco_offers.css'


const AddEco_offers = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSave = () => {
      const nickname = localStorage.getItem('user');
      const values = [name, surname, password, nickname];
      console.log('Saving changes:', values);
      
      axios.post('http://88.200.63.148:8081/updateUser', values)
    };
  
    return (
      <div className="profile-edit-container">
        <h1>Edit Profile</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
          />
  
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default AddEco_offers;