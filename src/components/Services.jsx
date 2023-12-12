import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./services.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Services() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <h2 className='m-5'>Our Services</h2>


            <Container>
                <Row>
                    <Col><div className="card1">
                        <div className="card1-content">
                            <h2 className="card1-title text-light">Alignment</h2>
                            <p className="card1-body text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                            </p>
                            <a href="#" className="button">
                                Learn More
                            </a>
                        </div>
                    </div></Col>
                    <Col><div className="card2">
                        <div className="card2-content">
                            <h2 className="card2-title text-light">A/C Services</h2>
                            <p className="card2-body text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                            </p>
                            <a href="#" className="button">
                                Learn More
                            </a>
                        </div>
                    </div></Col>
                    <Col><div className="card3">
                        <div className="card3-content">
                            <h2 className="card3-title text-light">Brakes</h2>
                            <p className="card3-body text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                            </p>
                            <a href="#" className="button">
                                Learn More
                            </a>
                        </div>
                    </div></Col>
                </Row>
                <Row className='pt-3'>
                    <Col><div className="card4">
                        <div className="card4-content">
                            <h2 className="card4-title text-light">Diagnostics</h2>
                            <p className="card4-body text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                            </p>
                            <a href="#" className="button">
                                Learn More
                            </a>
                        </div>
                    </div></Col>
                    <Col><div className="card5">
                        <div className="card5-content">
                            <h2 className="card5-title text-light">Engine Services</h2>
                            <p className="card5-body text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                            </p>
                            <a href="#" className="button">
                                Learn More
                            </a>
                        </div>
                    </div></Col>
                    <Col>
                    </Col>
                </Row>
            </Container>



            {/* <div className="card">
                <div className="card-content">
                    <h2 className="card-title">Alignment</h2>
                    <p className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                    </p>
                    <a href="#" className="button">
                        Learn More
                    </a>
                </div>
            </div> */}





        </>
    )
}

export default Services