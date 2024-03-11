import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar } from 'react-bootstrap';
import vector from "../Assets/Vector.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header() {
    return (
        <div>

            <div id='header'>
                <Container className='Header-bar'>
                    <Container fluid className='Topbar text-white'>
                        <div className='Left'>
                            <span className='envelope'>
                                <i class="bi bi-envelope-fill"></i>
                                <span className='ms-2'>Diesnatails@Email.com</span>
                            </span>
                            <span className='phone ms-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={"20px"} width={"18px"} fill='#fff'>
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" /></svg>
                                <span className='ms-2'>(+62)123 456 789</span>
                            </span>
                        </div>
                        <div className='Right'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={"20px"} width={"15px"} fill='#fff'>
                                <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" /></svg>
                            <i class="bi bi-twitter ms-3" height={"20px"} width={"15px"}></i>
                            <i class="bi bi-instagram ms-3" height={"20px"} width={"15px"}></i>
                            <i class="bi bi-pinterest ms-3" height={"20px"} width={"15px"}></i>
                        </div>
                    </Container>
                    <Navbar fluid className='Navbar'>
                        <img src={vector} className='img-fluid' height={"38px"} width={"38px"} />
                        <span className='house'>HOUSE.</span>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/checkin-checkout">
                                <select>
                                    <option>CHECK IN-CHECK OUT</option>
                                </select></Link></li>
                            <li><Link to="/blog">
                            <select>
                                <option>BLOG</option>
                            </select>
                            </Link></li>

                        </ul>

                        <button className='bg-white text-dark border-0 rounded-pill ps-3 pe-3 pt-1 pb-1'><Link to="" className='text-dark'>GET STARTED</Link></button>

                    </Navbar>

                </Container>
            </div>


        </div>
    )
}
