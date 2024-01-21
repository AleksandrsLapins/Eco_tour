import React, { useState, useEffect, useRef } from "react";
import CommonSection from "../shared/CommonSection";
import '../styles/attractions.css';
import TourCard from "../shared/TourCard";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../shared/searc-bar.css';

const Attractions = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/attractions2`);
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, []);


  const [searchQuery, setSearchQuery] = useState("");

  const filteredLoactions = attractions.filter((item) =>
   item.City.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleInputChange = () => {
    
  // };

  return (
    <>
      <CommonSection title={"All Attractions"}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                  <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i className="ri-map-pin-line"></i></span>
                    <div>
                      <h6>City</h6>
                      <input 
                        type="text" 
                        placeholder="Which city are you interested in?" 
                        onChange={(e)=>setSearchQuery(e.target.value)}
                      />
                    </div>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <>
            </>
            {filteredLoactions.map(attraction => (
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
