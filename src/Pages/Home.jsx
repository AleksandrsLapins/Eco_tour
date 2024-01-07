import React, { useState, useEffect } from "react"
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import heroIMG from '../components/assets/images/hero-img.png'
import heroIMG2 from '../components/assets/images/hero-img2.png'
import heroVideo from '../components/assets/images/hero-video.mp4'
import SearchBar from '../shared/SearchBar';
import TourCard from "../shared/TourCard";

const Home = () => {
    const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/attractions`);
        const data = await response.json();
        setAttractions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, []);
    return <>
    <section>
    <Container>
        <Row>
            <SearchBar/>
        </Row>
    </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h5 className="mb-5">Trending Products</h5>
                    <h2 className="featured__tour-title"> Our featured tours</h2>
                </Col>
                {attractions.map(attraction => (
              <Col lg='3' className="mb-4" key={attraction.Aid}>
                <TourCard tour={attraction} />
              </Col>
            ))}
            </Row>
        </Container>
    </section>
    </>
}     

export default Home