import React from 'react' 
import './footer.css'

import {Container, Row, Col, ListGroup, ListGroupItem, List} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/images/eco-logo.PNG'

const quick__links= [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/about",
        display: "About"
    },
    { 
        path: "/attractions",
        display: "Attractions"
    }
];

const quick__links2= [
    {
        path: "/gallery",
        display: "Gallery"
    },
    {
        path: "/",
        display: "Login"
    },
    { 
        path: "/signup",
        display: "Signup"
    }
];

const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form</p>

                            <div className="social__link">
                                <span>
                                    <Link to="#"><span><i class="ri-youtube-line"></i></span></Link>
                                </span>
                                <span>
                                    <Link to="#"><span><i class="ri-github-line"></i></span></Link>
                                </span>
                                <span>
                                    <Link to="#"><span><i class="ri-twitter-x-line"></i></span></Link>
                                </span>
                                <span>
                                    <Link to="#"><span><i class="ri-facebook-line"></i></span></Link>
                                </span>
                            </div>
                    </div>
                </Col>
                <Col lg="3">
                    <h5 className="footer__link-title">Discover</h5>

                    <ListGroup className="footer__quick__links">
                        {
                            quick__links.map((item,index)=>(
                                
                            
                            <ListGroupItem key={index} className='ps-0 border-0'>
                                <Link to={item.path}>{item.display}</Link>
                            </ListGroupItem>
                            ))
                        }
                        </ListGroup>
                </Col>
                <Col lg="3">
                <h5 className="footer__link-title">Quick Links</h5>

<ListGroup className="footer__quick__links">
    {
        quick__links2.map((item,index)=>(
            
        
        <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to={item.path}>{item.display}</Link>
        </ListGroupItem>
        ))
    }
    </ListGroup>
                </Col>
                <Col lg="3">
                <h5 className="footer__link-title">Contact</h5>

<ListGroup className="footer__quick__links">
    {
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                        <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                </h6>
                
                <p className="mb-0">Koper, Slovenia</p>
                         </ListGroupItem>

                         
    }
    {
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                        <i class="ri-mail-line"></i>
                    </span>
                    Email:
                </h6>
                
                <p className="mb-0">aleksandrlapins221201@gmail.com</p>
                         </ListGroupItem>

                         
    }
    {
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                        <i class="ri-phone-line"></i>
                    </span>
                    Phone:
                </h6>
                
                <p className="mb-0">+37120236347</p>
                         </ListGroupItem>

                         
    }
    </ListGroup>
                </Col>

                <Col lg='12' className="pt-5 text-center">
                    <p className="copyright">Copyright {year}, design and develop Aleksandrs Lapins.
                    All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer   