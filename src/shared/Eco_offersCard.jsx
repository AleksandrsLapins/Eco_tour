import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import calculateAvgRating from '../utils/avgRaing';

import './EcoOffers.css';

const Eco_offersCard = ({ tour }) => {

  const [tourRating, setTourRating] = useState(null)
  

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

          <h5>{tour.Content}</h5>
          <h5>{tour.Nickname}</h5>
          <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                   <span onClick={()=> setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                                </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Eco_offersCard;