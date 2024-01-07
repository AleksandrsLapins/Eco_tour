import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import calculateAvgRating from '../utils/avgRaing';

import './tour-card.css';

const TourCard = ({ tour }) => {


  

  if (!tour) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }



  return (
    <div className='tour__card'>
      <Card>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className="ri-map-pin-line"></i>
              {tour.City}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
              <i className="ri-star-fill"></i><span>{tour.Reviews}</span>
            </span>
          </div>

          <h5><Link to={`/attractions/${tour.Aid}`}>{tour.Title}</Link></h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${tour.Price} <span> / per person</span></h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;