import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
        
        <Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">Contact</h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">Contact</span>
      </nav>
    </div>
  </div>
</section>

<section className="contact-us">
  <div className="container py-5 my-5">
    <div className="row">
      <div className="contact-info col-lg-6 pb-3">
        <h2 className="text-dark">Contact Information</h2>
        <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
        <div className="page-content d-flex flex-wrap mt-5">
          <div className="col-lg-6 col-sm-12">
            <div className="content-box text-dark pe-4 mb-5">
              <h4 className="card-title">Office</h4>
              <div className="contact-address pt-3">
                <p>730 Glenstone Ave 65802, Springfield, US</p>
              </div>
              <div className="contact-number">
                <p>
                  <Link to="#">+123 987 321</Link>
                </p>
                <p>
                  <Link to="#">+123 123 654</Link>
                </p>
              </div>
              <div className="email-address">
                <p>
                  <Link to="#">contact@website.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="content-box">
              <h4 className="card-title">Management</h4>
              <div className="contact-address pt-3">
                <p>730 Glenstone Ave 65802, Springfield, US</p>
              </div>
              <div className="contact-number">
                <p>
                  <Link to="#">+123 987 321</Link>
                </p>
                <p>
                  <Link to="#">+123 123 654</Link>
                </p>
              </div>
              <div className="email-address">
                <p>
                  <Link to="#">contact@website.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inquiry-item col-lg-6">
        <div className="rounded-5">
          <h2 className="text-dark">Get in Touch</h2>
          <p>Use the form below to get in touch with us.</p>
          <form id="form" className="form-group flex-wrap">
            <div className="form-input col-lg-12 d-flex mb-3">
              <input type="text" name="email" placeholder="Write Your Name Here" className="form-control ps-3 me-3" />
              <input type="text" name="email" placeholder="Write Your Email Here" className="form-control ps-3" />
            </div>
            <div className="col-lg-12 mb-3">
              <input type="text" name="email" placeholder="Phone Number" className="form-control ps-3" />
            </div>
            <div className="col-lg-12 mb-3">
              <input type="text" name="email" placeholder="Write Your Subject Here" className="form-control ps-3" />
            </div>
            <div className="col-lg-12 mb-3">
              <textarea placeholder="Write Your Message Here" className="form-control ps-3" style={{height: "150px"}}></textarea>
            </div>
          </form>
          <div className="d-grid">
            <button className="btn btn-dark btn-lg rounded-1">Submit</button>
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
