import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import Banner from "../banner.png"
import banner1 from "../banner1.jpeg"

export default function banner() {
    return (

        <Container fluid>
            <Row>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div className="carousel-item active col-md-1">
                            <img src={banner1} className="d-block w-100" style={{ position: "relative" }} alt="..." />

                            <div className='content'>
                                <h1 className='text1'>Don't miss amazing <br />grocery deals</h1>

                                <h3 className='text2'>Sign up for the daily newsletter</h3>

                                <Form className='text3 border border-0'>

                                    <i className='bi bi-send float-start mt-1 '></i>
                                    <input type="email" placeholder="Your email address..." style={{ border: '0', backgroundColor: 'transparent' }} className='ms-2' />

                                    <button type='submit' className='btn1'>Subscribe</button>
                                </Form>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Banner} className="d-block w-100" alt="..." />

                            <div className='content'>
                                <h1 className='text1'>Fresh Vegetables <br /> Big discount</h1>

                                <h3 className='text2'>Save up to 50% off on yout first order</h3>

                                <Form className='text3 border border-0'>

                                    <i className='bi bi-send float-start mt-1 '></i>
                                    <input type="email" placeholder="Your email address..." style={{ border: '0', backgroundColor: 'transparent' }} className='ms-2' />

                                    <button type='submit' className='btn1'>Subscribe</button>
                                </Form>
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
            </Row>
            <hr style={{ color: "grey" }} />
        </Container>
    )
}
