import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Error() {
  return (
    <div>
        
        <Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
    <div className="container py-5 my-3">
        <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Error <span className="text-primary"> 404 </span></h2>
            <p>Sorry! Page that you are looking for is not available.</p>
            <Link to={"/"} className="btn btn-outline-dark btn-lg text-uppercase fs-6 px-4 py-3 rounded-1 mt-4">
                Go Back Home
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                </Link>
        </div>
    </div>
</section>

<section id="thank-you">
    <div className="container pt-5 mt-5 ">
        <div className="row justify-content-center">

            <div className="col-md-12">
                <div className="contact-information">

                    <div className="section-header">
                        <h2 className="section-title">Get in <span className="text-primary">Touch</span> </h2>
                        <p>We will get back to you as soon as possible.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="d-flex flex-wrap">
                            <div className="col-md-6 mb-5">
                                <div className="detail">
                                    <h3>Phones</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="icon icon-phone"></i>+1650-243-00023
                                        </li>
                                        <li>
                                            <i className="icon icon-phone"></i>+1650-243-00021
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5 ">
                                <div className="detail">
                                    <h3>Emails</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="#">info@yourcompany.com</Link>
                                        </li>
                                        <li>
                                            <Link to="#">support@yourcompany.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5 ">
                                <div className="address detail">
                                    <h3>Address</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span>North Melbourne VIC 3051, Australia</span>
                                        </li>
                                        <li>
                                            <span>South Sydney VIC 2045, Australia</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <div className="detail">
                                    <h3>Social Links</h3>
                                    <ul className="social-links list-unstyled d-flex">
                                        <li><Link to="#" className="me-2"><iconify-icon className="social-icon" icon="ri:facebook-fill"></iconify-icon></Link></li>
                                        <li><Link to="#" className="me-2"><iconify-icon className="social-icon" icon="ri:twitter-fill"></iconify-icon></Link></li>
                                        <li><Link to="#" className="me-2"><iconify-icon className="social-icon" icon="ri:pinterest-fill"></iconify-icon></Link></li>
                                        <li><Link to="#" className="me-2"><iconify-icon className="social-icon" icon="ri:instagram-fill"></iconify-icon></Link></li>
                                        <li><Link to="#" className="me-2"><iconify-icon className="social-icon" icon="ri:youtube-fill"></iconify-icon></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

</section>

<Footer />


    </div>
  )
}
