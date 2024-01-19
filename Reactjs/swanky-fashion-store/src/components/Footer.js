import React from 'react'
import { Link } from 'react-router-dom';
import instaitem1 from "../Assests/images/insta-item1.jpg"
// import instaitem2 from "../Assests/images/insta-item2.jpg"
import instaitem3 from "../Assests/images/insta-item3.jpg"
import instaitem4 from "../Assests/images/insta-item4.jpg"
import instaitem5 from "../Assests/images/insta-item5.jpg"
import darklogo from "../Assests/images/dark-logo.png"
// import dhl from "../Assests/images/dhl.png"
// import shippingcard from "../Assests/images/shippingcard.png"
// import visa from "../Assests/images/visa.jpg"
// import mastercard from "../Assests/images/mastercard.jpg"
// import paypal from "../Assests/images/paypal.jpg"




export default function Footer() {
  return (
    <div>

<section id="brand-collection" className="padding-small border-top border-bottom overflow-hidden my-5">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="col">
                            <i className="icon icon-brand-item1"></i>
                        </div>
                        <div className="col">
                            <i className="icon icon-brand-item2"></i>
                        </div>
                        <div className="col">
                            <i className="icon icon-brand-item3"></i>
                        </div>
                        <div className="col">
                            <i className="icon icon-brand-item4"></i>
                        </div>
                        <div className="col">
                            <i className="icon icon-brand-item5"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section id="instagram" className="padding-large overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="section-title">Shop our insta</h2>
                        </div>
                        <div className="row d-flex flex-wrap">
                            <figure className=" col instagram-item magnific position-relative">
                                <Link to="#" className="">
                                    <img src={instaitem1} alt="instagram" className="insta-image" />
                                        <div className="icon-overlay d-flex justify-content-center">
                                            <i className="icon icon-instagram1"></i>
                                        </div>
                                </Link>
                            </figure>
                            <figure className=" col instagram-item magnific position-relative">
                                <Link to="#" className="">
                                    {/* <img src={instaitem2} alt="instagram" className="insta-image" /> */}
                                        <div className="icon-overlay d-flex justify-content-center">
                                            <i className="icon icon-instagram1"></i>
                                        </div>
                                </Link>
                            </figure>
                            <figure className=" col instagram-item magnific position-relative">
                                <Link to="#" className="">
                                    <img src={instaitem3} alt="instagram" className="insta-image" />
                                        <div className="icon-overlay d-flex justify-content-center">
                                            <i className="icon icon-instagram1"></i>
                                        </div>
                                </Link>
                            </figure>
                            <figure className=" col instagram-item magnific position-relative">
                                <Link to="#" className="">
                                    <img src={instaitem4} alt="instagram" className="insta-image" />
                                        <div className="icon-overlay d-flex justify-content-center">
                                            <i className="icon icon-instagram1"></i>
                                        </div>
                                </Link>
                            </figure>
                            <figure className=" col instagram-item magnific position-relative">
                                <Link to="#" className="">
                                    <img src={instaitem5} alt="instagram" className="insta-image" />
                                        <div className="icon-overlay d-flex justify-content-center">
                                            <i className="icon icon-instagram1"></i>
                                        </div>
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


        <footer id="footer" className="overflow-hidden">
  <div className="container mt-5">
    <div className="row">
      <div className="footer-top-area">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-menu menu-001">
              <img src={darklogo} alt="logo" />
              <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio
                erat nullam fringilla.</p>
              <div className="newsletter-button d-flex flex-wrap align-items-center justify-content-between border-bottom widget-menu">
                <input type="text" name="Subscribe" placeholder="Enter your email address..." />
                <Link to="#">
                  <i className="icon icon-send"></i>
                </Link>
              </div>
              <div className="social-links">
                <ul className="d-flex list-unstyled">
                  <li>
                    <Link to="#">
                      <i className="icon icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon icon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon icon-instagram1"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon icon-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon icon-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-menu menu-002">
              <h5 className="widget-title">Quick Links</h5>
              <ul className="menu-list list-unstyled text-uppercase">
                <li className="menu-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">About</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Shop</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Blogs</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-menu text-uppercase menu-003">
              <h5 className="widget-title">Help & Info</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <Link to="#">Track Your Order</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Returns Policies</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Shipping + Delivery</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Contact Us</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-menu contact-item menu-004">
              <h5 className="widget-title">Contact Us</h5>
              <p>Do you have any queries or suggestions? <Link to="mailto:">yourinfo@gmail.com</Link>
              </p>
              <p>If you need support? Just give us a call. <Link to="">+55 111 222 333 44</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />

</footer>


    </div>
  )
}
