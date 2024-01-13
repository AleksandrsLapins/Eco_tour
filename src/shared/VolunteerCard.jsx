import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import calculateAvgRating from '../utils/avgRaing';

import './volunteer-card.css';

const VolunteerCard = ({ tour }) => {


  

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
            <span className='volunteer__rating d-flex align-items-center gap-1'>
              <i className="ri-star-fill"></i><span>{tour.Ratings}</span>
            </span>
          </div>

          <h5><Link to={`/volunteer/${tour.Vid}`}>{tour.Name}</Link></h5>
        </CardBody>
      </Card>
    </div>
  );
}

export default VolunteerCard;