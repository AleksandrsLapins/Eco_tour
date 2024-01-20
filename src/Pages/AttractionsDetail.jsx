import React, { useState, useEffect, useRef } from 'react';
import '../styles/attractions-detail.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import avatar from '../components/assets/images/avatar.jpg';

const AttractionsDetails = () => {
  const [attractionDetails, setAttractionDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [addComments, setAddComments] = useState('');
  const [ratings, setRatings] = useState([]);
  const { id } = useParams();

  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(0);

  const imageBuffer = attractionDetails.Image?.data && new Uint8Array(attractionDetails.Image.data);

  const handleStarClick = (rating) => {
    const nickname = localStorage.getItem('user');
    const Aid = attractionDetails.Aid;
    const values = [nickname, Aid, rating]
    console.log("va", values)
    try {
      axios.post(`http://88.200.63.148:8081/attractionsratings`, values);
    } catch (error) {
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
    fetchComments();
    fetchAttractionDetails();
    fetchRatings();
  }, [id]);

  const fetchAttractionDetails = async () => {
    console.log("Image data:", attractionDetails.Image);
    try {
      const response = await fetch(`http://88.200.63.148:8081/attractions/${id}`);
      const data = await response.json();
      setAttractionDetails(data);
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
        setComments(data);
      } else {
        console.error('Error fetching comments details:', 'Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching comments details:', error);
    }
  };

  const fetchRatings = async () => {
    try {
      const response = await fetch(`http://88.200.63.148:8081/AttractionsRatings/${id}`);
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

  const addComment = async () => {
    try {
      const response = await axios.post(`http://88.200.63.148:8081/addcomment`, {
        Nickname: localStorage.getItem('user'),
        Attractions_id: id,
        Content: addComments,
      });

      console.log(response.data);
      // Refresh comments after adding a new comment
      fetchComments();
    } catch (error) {
      console.error('Error adding comments details:', error);
    }
  };

  const deleteComment = async (commentId) => {
    console.log(commentId);
    try {
      const response = await axios.delete(`http://88.200.63.148:8081/comments/${commentId}`);
      console.log(response.data);

      if (response.status === 200) {
        // Update the comments state by filtering out the deleted comment
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
        console.log('Comment deleted successfully');
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      if (error.response) {
        if (error.response.status === 404) {
          console.warn('Comment not found:', error.response.data.message);
          // You may want to display a user-friendly message to the user.
        } else {
          console.error('Server responded with:', error.response.status, error.response.data);
        }
      }
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
            <div className='tour__content'>
            <div className='tour__info'>
                {imageBuffer && (
                  <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...imageBuffer))}`} alt={attractionDetails.Title} />
                )}
                <h2>{attractionDetails.Title}</h2>

                <div className='d-flex align-items-center gap-5'></div>

                <div className='tour__extra-details'>
                  <span>
                    <i className='ri-map-pin-2-fill'></i>
                    {attractionDetails.City}
                  </span>
                  <span>
                    <i className='ri-money-dollar-circle-line'></i>${attractionDetails.Price} /per person
                  </span>
                  {ratings.length > 0 && (
                    <span>
                      <i className='ri-star-fill'></i>
                      {ratings[0].average_rating} ({ratings[0].total_ratings})
                    </span>
                  )}
                </div>
                <h5>Description</h5>
                <p>{attractionDetails.Description}</p>
              </div>

              <div className='tour__reviews mt-4'>
                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} onClick={() => handleStarClick(star)}>
                        {star}
                        {star <= tourRating ? <i className='ri-star-s-fill'></i> : <i className='ri-star-s-line'></i>}
                      </span>
                    ))}
                  </div>

                  <div className='review__input'>
                    <input
                      type='text'
                      onChange={(e) => setAddComments(e.target.value)}
                      ref={reviewMsgRef}
                      placeholder='share your thoughts'
                      required
                    />
                    <button className='btn btn-success text-white' type='submit' onClick={addComment}>
                      Submit
                    </button>
                  </div>
                </Form>
              </div>

              <ListGroup className='user__reviews'>
                {comments.map((comment) => (
                  <div className='review__item' key={comment.Cid}>
                    <div className='w-100'>
                      <div className='d-flex align-items-start justify-content-between'>
                        <div className='user-info'>
                          <img src={avatar} alt='' />
                          <div>
                            <h5>{comment.Nickname}</h5>
                            {comment && comment.Date && (
                              <p>{new Date(comment.Date).toLocaleDateString('en-US')}</p>
                            )}
                            <p>{comment.Content}</p>
                          </div>
                        </div>
                        <div className='content-and-rating'>
                          <button
                            className='btn btn-danger text-white'
                            onClick={() => deleteComment(comment.Cid)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg='4'></Col>
        </Row>
      </Container>
    </section>
  );
};

export default AttractionsDetails;
