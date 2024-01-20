import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import axios from 'axios';

import './EcoOffers.css';

const Eco_offersCard = ({ tour }) => {

 
  const [tourRating, setTourRating] = useState(null)

  const handleStarClick = (rating) => {
    const nickname = localStorage.getItem('user');
    const EOid = tour.EOid;
    const values = [nickname, EOid, rating]
    console.log("va", values)
    try {
      axios.post(`http://88.200.63.148:8081/ecoratings`, values );
    }
    catch (error) {
      console.log(error);
    }
    setTourRating(rating);
  };
  

  if (!tour) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }



  return (
    <div className='volunteer__card'>
      <Card>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className='volunteer__location d-flex align-items-center gap-1'>
              <i className="ri-map-pin-line"></i>
              {tour.City}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
                    <span>
                      <i className='ri-star-fill'></i>
                      {tour.average_rating} ({tour.total_ratings})
                    </span>
            </span>
          </div>

          <h5>{tour.Content}</h5>
          <h5>{tour.Nickname}</h5>
          <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} onClick={() => handleStarClick(star)}>
                        {star}
                        {star <= tourRating ? <i className='ri-star-s-fill'></i> : <i className='ri-star-s-line'></i>}
                      </span>
                    ))}
                  </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Eco_offersCard;