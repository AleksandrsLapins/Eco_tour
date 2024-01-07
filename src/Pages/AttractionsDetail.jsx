import React, {useState, useEffect, useRef} from 'react'
import '../styles/attractions-detail.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import tourData from '../components/assets/data/tours'
import calculateAvgRating from '../utils/avgRaing'
import avatar from '../components/assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'

const AttractionsDetails = () => {
    const [attractionDetails, setAttractionDetails] = useState({});
    const [review, setReview] = useState({});
    const [comments, setcomments] = useState([]);
    const [addcomments, addsetcomments] = useState();
    const { id } = useParams();

    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

        const options = {day: 'numeric', month: 'long', year: 'numeric'}

        const submitHandler = (e) => {
            e.preventDefault();
            const reviewText = reviewMsgRef.current.value;
          
            alert(`${reviewText}, ${tourRating}`);
          };
  
    useEffect(() => {

        fetchComments();
      fetchAttractionDetails();
      fetchReview();
    }, [id]);

    const fetchAttractionDetails = async () => {
        try {
            const response = await fetch(`http://88.200.63.148:8081/attractions/${id}`);
            const data = await response.json();
            setAttractionDetails(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching attraction details:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await fetch(`http://88.200.63.148:8081/comments/${id}`);
            const data = await response.json();
            console.log(data);
            
            if (Array.isArray(data)) {
                setcomments(data);
            } else {
                console.error('Error fetching comments details:', 'Invalid data format');
            }
        } catch (error) {
            console.error('Error fetching comments details:', error);
        }
    };

    const fetchReview = async () => {
        try {
            const response = await fetch(`http://88.200.63.148:8081/review/${id}`);
            const data = await response.json();
            setReview(data[0]);
            console.log(data);
        } catch (error) {
            console.error('Error fetching attraction details:', error);
        }
    };

    const AddComments = async () => {
        try {
            const response = await axios.post(`http://88.200.63.148:8081/addcomment`, {
                Nickname: localStorage.getItem('user'),
                Attractions_id: id,
                Content: addcomments,
            });
    
            console.log(response.data);
        } catch (error) {
            console.error('Error adding comments details:', error);
        }
    };
    
    
  
    if (!attractionDetails) {
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
                            <h2>{attractionDetails.Title}</h2>

                            <div className='d-flex align-items-center gap-5'>
                            </div>

                            <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-fill"></i>{attractionDetails.City}</span>
                                <span><i class="ri-money-dollar-circle-line"></i>${attractionDetails.Price} /per person</span>
                            </div>
                            <h5>Description</h5>
                            <h5>Review</h5>
                            <p>{review.Content}</p>
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

                                <div className="review__input">
                                    <input type="text" onChange={(e) => addsetcomments(e.target.value)} ref={reviewMsgRef} placeholder='share your thoughts' 
                                    required/>
                                    <button className='btn btn-success text-white' type='submit' onClick={AddComments}>
                                        Submit</button>
                                </div>
                            </Form>

                        </div>
                        <ListGroup className='user__reviews'>
                                
                                        {comments.map((comment) => (
                                            <div className="review__item" key={comment.id}>
                                              <div className="w-100">
                                                <div className="d-flex align-items-start justify-content-between">
                                                  <div className="user-info">
                                                    <img src={avatar} alt="" />
                                                    <div>
                                                      <h5>{comment.Nickname}</h5>
                                                      {comment && comment.Date && (
                                                        <p>{new Date(comment.Date).toLocaleDateString('en-US')}</p>
                                                      )}
                                                      <p>{comment.Content}</p>
                                                    </div>
                                                  </div>
                                                  <div className="content-and-rating">
                                                    <span className="d-flex align-items-center">
                                                      {tourRating}<i className="ri-star-s-fill"></i>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                            </ListGroup>
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