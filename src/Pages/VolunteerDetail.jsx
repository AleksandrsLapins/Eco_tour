import React, {useState, useEffect, useRef} from 'react'
import '../styles/attractions-detail.css'
import {Container, Row, Col, Form} from 'reactstrap'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const AttractionsDetails = () => {
    const [volunteerDetails, setVolunteerDetails] = useState({});
    const [ratings, setRatings] = useState([]);
    const { id } = useParams();

    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

    const imageBuffer = volunteerDetails.Image?.data && new Uint8Array( volunteerDetails.Image.data);

    const handleStarClick = (rating) => {
      const nickname = localStorage.getItem('user');
      const Vid = volunteerDetails.Vid;
      const values = [nickname, Vid, rating]
      console.log("va", values)
      try {
        axios.post(`http://88.200.63.148:8081/volunteerratings`, values );
      }
      catch (error) {
        console.log(error);
      }
      setTourRating(rating);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
      
        alert(`${reviewText}, ${tourRating}`);
      };

    useEffect(() => {
        fetchRatings();
        fetchVolunteerDetails();
    }, [id]);

    const fetchVolunteerDetails = async () => {
        try {
            const response = await fetch(`http://88.200.63.148:8081/volunteer/${id}`);
            const data = await response.json();
            setVolunteerDetails(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching volunteer details:', error);
        }
    };

    const fetchRatings = async () => {
        try {
          const response = await fetch(`http://88.200.63.148:8081/VolunteerRatings/${id}`);
          const data = await response.json();
          console.log(data);
    
          if (Array.isArray(data)) {
            setRatings(data);
          } else {
            console.error('Error fetching ratings details:', 'Invalid data format');
          }
        } catch (error) {
          console.error('Error fetching ratings details:', error);
        }
      };

    
    if (!volunteerDetails) {
      // Loading state or handle error
      return <div>Loading...</div>;
    }
  
  
    return (
        <section>
        <Container>
            <Row>
                <Col lg='8'>
                    <div className="tour__content">

                        <div className="tour__info">
                        {imageBuffer && (
                        <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...imageBuffer))}`} alt={volunteerDetails.Title} />
                         )}
                            <h2>{volunteerDetails.Name}</h2>

                            <div className='d-flex align-items-center gap-5'>
                            </div>

                            <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-fill"></i>{volunteerDetails.City}</span>
                            </div>
                            {ratings.length > 0 && (
                            <span>
                            <i className='ri-star-fill'></i>
                            {ratings[0].average_rating} ({ratings[0].total_ratings})
                            </span>
                            )}
                            <h5>Description</h5>
                            <p>{volunteerDetails.Content}</p>
                        </div>

                        <div className="tour__reviews mt-4">

                        <Form onSubmit={submitHandler}>
                        <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                        {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => handleStarClick(star)}>
                        {star}
                        {star <= tourRating ? <i className='ri-star-s-fill'></i> : <i className='ri-star-s-line'></i>}
                         </span>
                         ))}
                        </div>
                            </Form>

                        </div>
                    </div>
                </Col>
                <Col lg='4'>
                </Col>
            </Row>
        </Container>
    </section>
    );
  };                                                         
  
  export default AttractionsDetails;