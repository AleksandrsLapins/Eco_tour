import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import '../styles/attractions.css';
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import { Container, Row, Col } from 'reactstrap';

const Attractions = () => {
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

  return (
    <>
      <CommonSection title={"All Attractions"}></CommonSection>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {attractions.map(attraction => (
              <Col lg='3' className="mb-4" key={attraction.Aid}>
                <TourCard tour={attraction} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Attractions;