import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

import './tour-card.css';

const TourCard = ({ tour }) => {
  const imageBuffer = tour.Image?.data && new Uint8Array(tour.Image.data);

  if (!tour) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }

  return (
    <div className='tour__card'>
      <Card>
        <CardBody>
        {imageBuffer && (
                  <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...imageBuffer))}`} alt={tour.Title} />
                )}
          <div className="card__top d-flex align-items-center justify-content-between">
        
            <span className='tour__location d-flex align-items-center gap-1'>
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

          <h5><Link to={`/attractions/${tour.Aid}`} style={{ textDecoration: 'none' }}>{tour.Title}</Link></h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${tour.Price} <span> / per person</span></h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;