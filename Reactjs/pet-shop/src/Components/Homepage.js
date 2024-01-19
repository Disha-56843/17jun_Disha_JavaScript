import React from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import logo from "../images/logo.png";
import banner from "../images/banner-img.png";
import banner2 from "../images/banner-img2.png";
import banner3 from "../images/banner-img3.png";
import banner4 from "../images/banner-img4.png";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg"
import item3 from "../images/item3.jpg"
import item4 from "../images/item4.jpg"
import item6 from "../images/item6.jpg"
import item7 from "../images/item7.jpg"
import item8 from "../images/item8.jpg"
import item9 from "../images/item9.jpg"
import item10 from "../images/item10.jpg"
import item11 from "../images/item11.jpg"
import item12 from "../images/item12.jpg"
import item13 from "../images/item13.jpg"
import item14 from "../images/item14.jpg"
import item15 from "../images/item15.jpg"
import item16 from "../images/item16.jpg"
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import Header from './Header';
import Footer from './Footer';
import Service from './Service';
import Register from './Register';

export default function Homepage() {
    return (
        <div>


            {/* <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none;"}}>
                <defs>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="star-outline" viewBox="0 0 15 15">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="star-solid" viewBox="0 0 15 15">
                        <path fill="currentColor"
                            d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" />
                    </symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
                        <path fill="currentColor"
                            d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
                    </symbol>

                </defs>
            </svg> */}

            {/* <div className="preloader-wrapper">
                <div className="preloader">
                </div>
            </div> */}

            

            <Header />


            <div id="carouselExampleIndicators" style={{ background: "#F9F3EC" }} class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" className='active bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className='bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className='bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <div className="row banner-content align-items-center ">
                            <div className="img-wrapper col-md-5">
                                <img src={banner} className="img-fluid" />
                            </div>
                            <div className="content-wrapper col-md-7 p-5 mb-5">
                                <div className="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                                <h2 className="banner-title display-1 fw-normal">Best destination for <span className="text-primary">your
                                    pets</span>
                                </h2>
                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 mt-3">
                                    shop now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <div className="row banner-content align-items-center">
                            <div className="img-wrapper col-md-5">
                                <img src={banner3} className="img-fluid" />
                            </div>
                            <div className="content-wrapper col-md-7 p-5 mb-5">
                                <div className="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                                <h2 className="banner-title display-1 fw-normal">Best destination for <span className="text-primary">your
                                    pets</span>
                                </h2>
                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 mt-3">
                                    shop now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>
                                </Link>
                            </div>


                        </div>
                    </div>
                    <div class="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <div className="row banner-content align-items-center">
                            <div className="img-wrapper col-md-5">
                                <img src={banner4} className="img-fluid" />
                            </div>
                            <div className="content-wrapper col-md-7 p-5 mb-5">
                                <div className="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                                <h2 className="banner-title display-1 fw-normal">Best destination for <span className="text-primary">your
                                    pets</span>
                                </h2>
                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 mt-3">
                                    shop now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <section id="categories">
                <div className="container my-3 py-5">
                    <div className="row my-5">
                        <div className="col text-center">
                            <Link to="#" className="categories-item">

                                <svg xmlns="http://www.w3.org/2000/svg" width="9em" height="9em" viewBox="0 0 256 256">
                                    <path fill='#DEAD6F99' d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-24.46 0h-51.42a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104m-26.06-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M128 40a71.87 71.87 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72"></path>
                                </svg>
                                <h5>Foodies</h5>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="#" className="categories-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="9em" viewBox="0 0 256 256">
                                    <path fill="#DEAD6F99" d="M176 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-50.88 61.85a8 8 0 0 0-11.27 1l-40 48a8 8 0 0 0 12.3 10.24l40-48a8 8 0 0 0-1.03-11.24M240 80a8 8 0 0 1-3.56 6.66L216 100.28V120a104.11 104.11 0 0 1-104 104H8a8 8 0 0 1-6.25-13L96 93.19V76a60 60 0 0 1 117.21-18.14l23.23 15.48A8 8 0 0 1 240 80m-22.42 0L201.9 69.54a8 8 0 0 1-3.31-4.64A44 44 0 0 0 112 76v20a8 8 0 0 1-1.75 5L24.64 208H112a88.1 88.1 0 0 0 88-88V96a8 8 0 0 1 3.56-6.66Z"></path>
                                </svg>
                                <h5>Bird Shop</h5>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="#" className="categories-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="9em" viewBox="0 0 256 256">
                                    <path fill="#DEAD6F99" d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.26 16.26 0 0 0 6.71 1.48a15.48 15.48 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.31 16.31 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M32 128l16.43-88L90.5 52.37Zm144 80h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.92 56h40.15L200 123.11V184a24 24 0 0 1-24 24m48-80l-58.5-75.63L207.57 40zm-120 12a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                                </svg>
                                <h5>Dog Shop</h5>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="#" className="categories-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="9em" viewBox="0 0 256 256">
                                    <path fill="#DEAD6F99" d="M168.06 75.94a12 12 0 1 1-12-12a12 12 0 0 1 12 12m39.87 81c-20.76 26.37-53.85 40.74-98.41 42.77l-22 51.42a8 8 0 0 1-7.39 4.87h-.51a8 8 0 0 1-7.19-5.78l-14.81-51.85L5.8 183.53a8 8 0 0 1-1-15.05l51.43-22c2-44.57 16.41-77.66 42.79-98.41c43.21-34 104.91-22.83 116.84-20.25a16 16 0 0 1 12.26 12.26C230.76 52 241.94 113.76 207.93 157Zm-46.33 15.67a52.12 52.12 0 0 1-33.42-44.79A52.1 52.1 0 0 1 83.4 94.41c-7 15.86-10.76 35.11-11.3 57.62a8 8 0 0 1-4.85 7.16l-35.41 15.15l34.46 9.87a8 8 0 0 1 5.49 5.49l9.84 34.46l15.18-35.41a8 8 0 0 1 7.19-4.85c22.48-.53 41.73-4.31 57.6-11.29m50.93-129.14c-10.7-2.32-66-12.39-103.57 17.18a80.9 80.9 0 0 0-12.83 12.67a36 36 0 0 0 39.36 38.47a8 8 0 0 1 8.72 8.72a36 36 0 0 0 38.49 39.36a80.64 80.64 0 0 0 12.65-12.81c29.57-37.57 19.5-92.88 17.18-103.59"></path>
                                </svg>
                                <h5>Fish Shop</h5>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="#" className="categories-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="9em" viewBox="0 0 256 256">
                                    <path fill="#DEAD6F99" d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48m-16 0l-21.56 24.8a8 8 0 0 1-10.81 1.2A88.86 88.86 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.43 97.43 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.43 97.43 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A88.86 88.86 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z"></path>
                                </svg>
                                <h5>Cat Shop</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="clothing" className="my-5 overflow-hidden">
                <div className="container pb-5">

                    <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
                        <h2 className="display-3 fw-normal">Pet Clothing</h2>
                        <div>
                            <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                shop now
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="dark" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                                </Link>
                        </div>
                    </div>

                    <div className="products-carousel swiper">
                        <div className="swiper-wrapper row">

                            <div className="swiper-slide col-lg-3">
                                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    New
                                </div>
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item1} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide  col-lg-3">
                                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    New
                                </div>  */}
                                <div className="card position-relative">
                                    <a to="single-product.html"><img src={item2} className="img-fluid rounded-4" alt="" /></a>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide col-lg-3">
                                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    -10%
                                </div>
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item3} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide col-lg-3">
                                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    New
                                </div>  */}
                                <div className="card position-relative">
                                    <Link to={"\single-product.html"}><img src={item4} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* / products-carousel  */}


                </div>
            </section>

            <section id="foodies" className="my-5">
                <div className="container my-5 py-5">

                    <div className="section-header d-md-flex justify-content-between align-items-center">
                        <h2 className="display-3 fw-normal">Pet Foodies</h2>
                        <div className="mb-4 mb-md-0">
                            <p className="m-0">
                                <button className="filter-button me-4  active" data-filter="*">ALL</button>
                                <button className="filter-button me-4 " data-filter=".cat">CAT</button>
                                <button className="filter-button me-4 " data-filter=".dog">DOG</button>
                                <button className="filter-button me-4 " data-filter=".bird">BIRD</button>
                            </p>
                        </div>
                        <div>
                            <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                shop now
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="dark" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                                </Link>
                        </div>
                    </div>

                    <div className="isotope-container row">

                        <div className="item cat col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product.html"}><img src={item9} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item dog col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product.html"}><img src={item10} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item dog col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product.html"}><img src={item11} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item cat col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                Sold
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product"}><img src={item12} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item bird col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product"}><img src={item13} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item bird col-md-4 col-lg-3 my-4">
                            {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div> */}
                            <div className="card position-relative">
                                <Link to={"\single-product"}><img src={item14} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to="single-product.html">
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item dog col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                Sale
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product"}><img src={item15} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-product"}>
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item cat col-md-4 col-lg-3 my-4">
                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                New
                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-product"}><img src={item16} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to="single-product.html">
                                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                    </Link>

                                    <div className="card-text">
                                        <span className="rating secondary-font">
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                                            5.0</span>

                                        <h3 className="secondary-font text-primary">$18.00</h3>

                                        <div className="d-flex flex-wrap mt-3">
                                            <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                <h5 className="text-uppercase m-0">Add to Cart</h5>
                                            </Link>
                                            <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </section>

            <section id="banner-2" className="my-3" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="row flex-row-reverse banner-content align-items-center">
                        <div className="img-wrapper col-12 col-md-6">
                            <img src={banner2} className="img-fluid" />
                        </div>
                        <div className="content-wrapper col-12 offset-md-1 col-md-5 p-5">
                            <div className="secondary-font text-primary text-uppercase mb-3 fs-4">Upto 40% off</div>
                            <h2 className="banner-title display-1 fw-normal">Clearance sale !!!
                            </h2>
                            <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                shop now
                                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                                    <use to="#arrow-right"></use>
                                </svg></Link>
                        </div>

                    </div>
                </div>
            </section>


            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" className='active bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className='bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className='bg-dark rounded-circle' style={{ padding: "1.3% 0%" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row ms-5">
                            <div className="col-1 me-5 ms-5">
                                <iconify-icon icon="ri:double-quotes-l" className="quote-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className='me-1 ms-4' width="10.4em" height="12.4em" viewBox="0 0 24 24">
                                <path fill='#DEAD6F' d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                                </svg>
                                </iconify-icon>
                            </div>
                            <div className="col-md-8 mt-md-5 p-5 pt-0 pt-md-5">
                                <p className="testimonial-content fs-2">At the core of our practice is the idea that cities are the
                                    incubators of our
                                    greatest achievements, and the best hope for a sustainable future.</p>
                                <p className="text-black">- Joshima Lin</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row ms-5">
                            <div className="col-1 me-5 ms-5">
                                <iconify-icon icon="ri:double-quotes-1" className="quote-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className='me-1 ms-4' width="10.4em" height="12.4em" viewBox="0 0 24 24">
                                <path fill='#DEAD6F' d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                                </svg>
                                </iconify-icon>
                            </div>
                            <div className="col-md-8 mt-md-5 p-5 pt-0 pt-md-5">
                                <p className="testimonial-content fs-2">At the core of our practice is the idea that cities are the
                                    incubators of our
                                    greatest achievements, and the best hope for a sustainable future.</p>
                                <p className="text-black">- Joshima Lin</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row ms-5">
                            <div className="col-1 me-5 ms-5">
                                <iconify-icon icon="ri:double-quotes-1" className="quote-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className='me-1 ms-4' width="10.4em" height="12.4em" viewBox="0 0 24 24">
                                <path fill='#DEAD6F' d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"></path>
                                </svg>
                                </iconify-icon>
                            </div>
                            <div className="col-md-8 mt-md-5 p-5 pt-0 pt-md-5">
                                <p className="testimonial-content fs-2">At the core of our practice is the idea that cities are the
                                    incubators of our
                                    greatest achievements, and the best hope for a sustainable future.</p>
                                <p className="text-black">- Joshima Lin</p>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>




           

            <section id="bestselling" className="my-5 overflow-hidden">
                <div className="container py-5 mb-5">

                    <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
                        <h2 className="display-3 fw-normal">Best selling products</h2>
                        <div>
                            <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                shop now
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="dark" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                                </Link>
                        </div>
                    </div>

                    <div className=" swiper bestselling-swiper">
                        <div className="row swiper-wrapper">

                            <div className="swiper-slide col-lg-3">
                                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    New
                                </div>  */}
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item6} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide col-lg-3">
                                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    Sale
                                </div>
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item7} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide col-lg-3">
                                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    New
                                </div> */}
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item8} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide col-lg-3">
                                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                    -10%
                                </div>
                                <div className="card position-relative">
                                    <Link to={"\single-product"}><img src={item3} className="img-fluid rounded-4" alt="" /></Link>
                                    <div className="card-body p-0">
                                        <Link to={"\single-product"}>
                                            <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                                        </Link>

                                        <div className="card-text">
                                            <span className="rating secondary-font">
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                <iconify-icon icon="clarity:star-solid" className="text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                                </iconify-icon>
                                                5.0</span>

                                            <h3 className="secondary-font text-primary">$18.00</h3>

                                            <div className="d-flex flex-wrap mt-3">
                                                <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                                                </Link>
                                                <Link to="#" className="btn-wishlist px-4 pt-3 ">
                                                    <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    {/* category-carousel */}


                </div>
            </section>

            <Register />

            <section id="latest-blog" className="my-5">
                <div className="container py-5 my-5">
                    <div className="row mt-5">
                        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
                            <h2 className="display-3 fw-normal">Latest Blog Post</h2>
                            <div>
                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                    Read all
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="dark" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 my-4 my-md-0">
                            <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                                <h3 className="secondary-font text-primary m-0">20</h3>
                                <p className="secondary-font fs-6 m-0">Feb</p>

                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-post"}><img src={blog1} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-post"}>
                                        <h3 className="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
                                    </Link>

                                    <div className="card-text">
                                        <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                                            our greatest
                                            achievements, and the best hope for a sustainable future.</p>
                                        <a to="single-post.html" className="blog-read">read more</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-4 my-md-0">
                            <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                                <h3 className="secondary-font text-primary m-0">21</h3>
                                <p className="secondary-font fs-6 m-0">Feb</p>

                            </div>
                            <div className="card position-relative">
                                <Link to={"/single-post"}><img src={blog2} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0">
                                    <Link to={"\single-post"}>
                                        <h3 className="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
                                    </Link>

                                    <div className="card-text">
                                        <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                                            our greatest
                                            achievements, and the best hope for a sustainable future.</p>
                                        <Link to={"\single-post"} className="blog-read">read more</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-4 my-md-0 border-0">
                            <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                                <h3 className="secondary-font text-primary m-0">22</h3>
                                <p className="secondary-font fs-6 m-0">Feb</p>

                            </div>
                            <div className="card position-relative">
                                <Link to={"\single-post"}><img src={blog3} className="img-fluid rounded-4" alt="" /></Link>
                                <div className="card-body p-0 border-0 border-start-0">
                                    <Link to={"\single-post"}>
                                        <h3 className="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
                                    </Link>

                                    <div className="card-text">
                                        <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                                            our greatest
                                            achievements, and the best hope for a sustainable future.</p>
                                        <Link to={"\single-post"} className="blog-read">read more</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Service />

            <Footer />



        </div >
    )
}
