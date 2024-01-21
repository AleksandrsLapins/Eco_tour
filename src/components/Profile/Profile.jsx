import React, { useState } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap';

import './Profile.css'


const Profile = () => {
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
  
          <Button className='add_btn btn btn-success' onClick={handleSave}>
            Save Changes
          </Button>
        </form>
      </div>
    );
  };
  
  export default Profile;