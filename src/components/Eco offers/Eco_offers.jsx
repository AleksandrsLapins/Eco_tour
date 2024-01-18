import React, { useState, useEffect } from 'react'
import './eco_offers.css'
import SearchBar from '../../shared/SearchBar';
import Eco_offersCard from "../../shared/Eco_offersCard";
import { Container, Row, Col } from 'reactstrap';
import CommonSection from "../../shared/CommonSection";

const Eco_offers = () =>  {
    const [eco, setEco] = useState([]);

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
    <CommonSection title={"All Eco Offers from users"}></CommonSection>
    <section>
        <Container>
            <Row>
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

export default Eco_offers