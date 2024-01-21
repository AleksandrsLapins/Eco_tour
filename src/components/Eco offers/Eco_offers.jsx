import React, { useState, useEffect } from 'react'
import './eco_offers.css'
import Eco_offersCard from "../../shared/Eco_offersCard";
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import CommonSection from "../../shared/CommonSection";

const Eco_offers = () =>  {
    const [eco, setEco] = useState([]);

  useEffect(() => {
    const fetchEcoData = async () => {
      try {
        const response = await fetch(`http://88.200.63.148:8081/eco_offers2`);
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
        <Link to='/addeco_offers' style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button className='add_btn btn btn-success'>
                Add Eco Offers
            </Button>
            </Link>
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