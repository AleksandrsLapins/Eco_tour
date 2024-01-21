import React, { useState, useEffect } from 'react'
import './volunteer.css'
import VolunterCard from "../../shared/VolunteerCard";
import { Container, Row, Col, Form, FormGroup  } from 'reactstrap';
import CommonSection from "../../shared/CommonSection";

const Volunteer = () =>  {
    const [volunteers, setVolunteer] = useState([]);

  useEffect(() => {
    const fetchVolunteerData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/volunteer2`);
        const data = await response.json();
        setVolunteer(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching volunteer data:', error);
      }
    };

    fetchVolunteerData();
  }, []);



  const [searchQuery, setSearchQuery] = useState("");

  const filteredLoactions = volunteers.filter((item) =>
   item.City.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleInputChange = () => {
    
  // };


    return <>
    <CommonSection title={"All Volunteers works"}></CommonSection>
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
    <section>
        <Container>
            <Row>
            <>
            </>
            {filteredLoactions.map(volunteer => (
              <Col lg='3' className="mb-4" key={volunteer.Vid}>
                <VolunterCard tour={volunteer} />
              </Col>
            ))}
            </Row>
        </Container>
    </section>
    </>
}     

export default Volunteer