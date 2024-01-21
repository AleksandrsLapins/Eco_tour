import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'reactstrap';

import './addeco_offers.css'


const AddEco_offers = () => {
    const [city, setCity] = useState('');
    const [content, setContent] = useState('');

  
    const handleSave = async () => {
      try {
        await axios.post(`http://88.200.63.148:8081/addeco`, {
          Nickname: localStorage.getItem('user'),
          City : city,
          Content: content,
        });
    
        console.log('Comment added successfully');
        
      } catch (error) {
        console.error('Error adding or fetching comments:', error);
      }
    };
    

    return (
      <div className="profile-edit-container">
        <h1>Add Eco offers</h1>
        <form>
          <label htmlFor="Content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
  
          <label htmlFor="City">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
              <Link to='/eco_offers' style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleSave}>
              <Button className='add_btn btn btn-success'>
                Save Changes
              
            </Button>
            </Link>
        </form>
      </div>
    );
  };
  
  export default AddEco_offers;