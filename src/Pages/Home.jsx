import React, { useState, useEffect } from "react"
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import TourCard from "../shared/TourCard";
import VolunterCard from "../shared/VolunteerCard";
import Eco_offersCard from "../shared/Eco_offersCard";

const Home = () => {
    const [attractions, setAttractions] = useState([]);
    const [volunteers, setVolunteer] = useState([]);
    const [eco, setEco] = useState([]);

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

  useEffect(() => {
    const fetchVolunteerData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/volunteer`);
        const data = await response.json();
        setVolunteer(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching volunteer data:', error);
      }
    };

    fetchVolunteerData();
  }, []);

  useEffect(() => {
    const fetchEcoData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/eco_offers`);
        const data = await response.json();
        setEco(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching eco offers data:', error);
      }
    };

    fetchEcoData();
  }, []);
    return <>
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
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className="featured__tour-title"> Our featured volunteers</h2>
                </Col>
                {volunteers.map(volunteer => (
              <Col lg='3' className="mb-4" key={volunteer.Vid}>
                <VolunterCard tour={volunteer} />
              </Col>
            ))}
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
            <Col lg='12'>
                    <h2 className="featured__tour-title"> Eco offers from other users</h2>
                </Col>
                {eco.map(eco_offers => (
              <Col lg='3' className="mb-4" key={eco_offers.EOid}>
                <Eco_offersCard tour={eco_offers} />
              </Col>
            ))}
            </Row>
        </Container>
    </section>
    </>
  
}     

export default Home