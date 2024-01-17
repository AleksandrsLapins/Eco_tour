import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Profile.css'


const Profile = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nickname, setNickname] = useState('');
    const [photo, setPhoto] = useState('');
  
    const handleSave = () => {
      console.log('Saving changes:', { name, surname, nickname, photo });
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
  
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
  
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default Profile;