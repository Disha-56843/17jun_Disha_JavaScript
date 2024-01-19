import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"

export default function Blog() {
  return (
    <div>
        

<Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">Blog</h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">Blog</span>
      </nav>
    </div>
  </div>
</section>

<div className="my-5 py-5">
  <div className="container">
    <div className="row entry-container" style={{position: "relative", height: "1255.25px"}}>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "0px", top: "0px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">20</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog1} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "380px", top: "0px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">21</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog2} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "760px", top: "0px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">22</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog3} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "760px", top: "493.583px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">20</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog1} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "0px", top: "591.6px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">21</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog2} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="entry-item col-md-4 my-4" style={{position: "absolute", left: "380px", top: "663.65px"}}>
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">22</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>

        </div>
        <div className="card position-relative">
          <Link to="single-post.html"><img src={blog3} className="img-fluid rounded-4" alt="image" /></Link>
          <div className="card-body p-0">
            <Link to="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
            </Link>

            <div className="card-text">
              <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                our greatest
                achievements, and the best hope for a sustainable future.</p>
              <Link to="single-post.html" className="blog-read">read more</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <nav className="navigation paging-navigation text-center mt-3" role="navigation">
      <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
        <Link to="#" className="pagination-arrow d-flex align-items-center mx-3">
          <iconify-icon icon="ic:baseline-keyboard-arrow-left" className="pagination-arrow fs-1"></iconify-icon>
        </Link>
        <span aria-current="page" className="page-numbers mt-2 fs-3 mx-3 current">1</span>
        <Link className="page-numbers mt-2 fs-3 mx-3" to="#">2</Link>
        <Link className="page-numbers mt-2 fs-3 mx-3" to="#">3</Link>
        <Link to="#" className="pagination-arrow d-flex align-items-center mx-3">
          <iconify-icon icon="ic:baseline-keyboard-arrow-right" className="pagination-arrow fs-1"></iconify-icon>
        </Link>
      </div>
    </nav>
  </div>
</div>



<Footer />




    </div>
  )
}
