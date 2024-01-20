import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

import './volunteer-card.css';

const VolunteerCard = ({ tour }) => {
  const imageBuffer = tour.Image?.data && new Uint8Array(tour.Image.data);


  if (!tour) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }



  return (
    <div className='volunteer__card'>
      <Card>
        <CardBody>
        {imageBuffer && (
                  <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...imageBuffer))}`} alt={tour.Title} />
                )}
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

          <h5><Link to={`/volunteer/${tour.Vid}`} style={{ textDecoration: 'none' }}>{tour.Name}</Link></h5>
        </CardBody>
      </Card>
    </div>
  );
}

export default VolunteerCard;