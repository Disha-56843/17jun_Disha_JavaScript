import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from "../images/blog-lg1.jpg"
import blog2 from "../images/blog-lg2.jpg"
import blog3 from "../images/blog-lg3.jpg"
import Header from './Header';
import Footer from './Footer';
import Service from './Service';
import Register from './Register';

export default function Aboutus() {
  return (
    <div>

     


     

      <Header />

      <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">About <span className="text-primary">Us</span> </h2>
            <nav className="breadcrumb">
              <Link className="breadcrumb-item nav-link" to={"#"}>Home</Link>
              <Link className="breadcrumb-item nav-link" to={"#"}>Pages</Link>
              <span className="breadcrumb-item active" aria-current="page">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="my-5 py-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 my-4 pe-5">
              <h2 className="">How Waggy Started </h2>
              <p>In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio
                posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.</p>
              <Link to={"#"} className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 py-2 px-4">
                Read Blog
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="dark" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </Link>
            </div>
            <div className="col-md-6 my-4 ">
              <h2 className="">More About Us </h2>
              <p>In commodo auctor aenean egestas malesuada in pulvinar enim viverra.</p>
              <p className="m-0"> <span className="text-primary">✓</span> Porta aenean egestas malesuada in pulvinar enim
                viverra.</p>
              <p className="m-0"> <span className="text-primary">✓</span> Porta aenean egestas malesuada in pulvinar enim
                viverra.</p>
              <p className="m-0"> <span className="text-primary">✓</span> Porta aenean egestas malesuada in pulvinar enim
                viverra.</p>
              <p className="m-0"> <span className="text-primary">✓</span> Porta aenean egestas malesuada in pulvinar enim
                viverra.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="my-5 pb-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <h2 className="display-4">You can buy best pet products from Waggy. </h2>
            </div>
            <div className="col-md-6">
              <p>Aliquet nunc vitae interdum mauris pretium lectus mauris viverra ornare quam diam felis. Ultrices
                eget pretium sit euismod mi id risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean
                egestas malesuada in pulvinar enim viverra. ipsum dolor sit amet consectetur. Ipsum ipsum ut
                pulvinar ipsum cras metus purus mattis integer. Tellus ipsum viverra semper quisque eget nisl
                vel congue consectetur. </p>
              <p>Ultrices eget pretium sit euismod mi id risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean
                egestas malesuada in pulvinar enim viverra. ipsum dolor sit amet consectetur. Ipsum ipsum ut
                pulvinar ipsum cras metus purus mattis integer. Tellus ipsum viverra semper quisque eget nisl
                vel congue consectetur. </p>

            </div>
          </div>
        </div>
      </div>

      <Register />


      <section id="latest-blog" className="my-5">
        <div className="container py-5 my-5">
          <div className="row mt-5">
            <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
              <h2 className="display-3 fw-normal">Latest Blog Post</h2>
              <div>
                <Link to={"#"} className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
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
                <Link to={"single-post"}><img src={blog1} className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link to={"single-post"}>
                    <h3 className="card-title pt-4 pb-3 m-0">10 Reasons to be helpful towards any animals</h3>
                  </Link>

                  <div className="card-text">
                    <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <Link to={"single-post"} className="blog-read">read more</Link>
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
                <Link to={"single-post"}><img src={blog2} className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link to={"single-post"}>
                    <h3 className="card-title pt-4 pb-3 m-0">How to know your pet is hungry</h3>
                  </Link>

                  <div className="card-text">
                    <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <Link to={"single-post"} className="blog-read">read more</Link>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-4 my-4 my-md-0">
              <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 className="secondary-font text-primary m-0">22</h3>
                <p className="secondary-font fs-6 m-0">Feb</p>

              </div>
              <div className="card position-relative">
                <Link to={"single-post"}><img src={blog3} className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link to={"single-post"}>
                    <h3 className="card-title pt-4 pb-3 m-0">Best home for your pets</h3>
                  </Link>

                  <div className="card-text">
                    <p className="blog-paragraph fs-6">At the core of our practice is the idea that cities are the incubators of
                      our greatest
                      achievements, and the best hope for a sustainable future.</p>
                    <Link to={"single-post"} className="blog-read">read more</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <Service />
      <Footer />


      <script src="js/jquery-1.11.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      <script src="js/plugins.js"></script>
      <script src="js/script.js"></script>
      <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>


    </div>
  )
}
