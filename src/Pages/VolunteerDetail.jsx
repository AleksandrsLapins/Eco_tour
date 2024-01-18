import React, {useState, useEffect, useRef} from 'react'
import '../styles/attractions-detail.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import calculateAvgRating from '../utils/avgRaing'
import avatar from '../components/assets/images/avatar.jpg'

const AttractionsDetails = () => {
    const [volunteerDetails, setVolunteerDetails] = useState({});
    const { id } = useParams();

    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
      
        alert(`${reviewText}, ${tourRating}`);
      };

    useEffect(() => {

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
                            <h2>{volunteerDetails.Name}</h2>

                            <div className='d-flex align-items-center gap-5'>
                            </div>

                            <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-fill"></i>{volunteerDetails.City}</span>
                            </div>
                            <h5>Description</h5>
                            <p>{volunteerDetails.Content}</p>
                        </div>

                        <div className="tour__reviews mt-4">

                        <Form onSubmit={submitHandler}>
                                <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                   <span onClick={()=> setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=> setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
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