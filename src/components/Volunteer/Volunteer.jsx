import React, { useState, useEffect } from 'react'
import './volunteer.css'
import SearchBar from '../../shared/SearchBar';
import VolunterCard from "../../shared/VolunteerCard";
import { Container, Row, Col } from 'reactstrap';
import CommonSection from "../../shared/CommonSection";

const Volunteer = () =>  {
    const [volunteers, setVolunteer] = useState([]);

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
    return <>
    <CommonSection title={"All Volunteers"}></CommonSection>
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
                {volunteers.map(volunteer => (
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