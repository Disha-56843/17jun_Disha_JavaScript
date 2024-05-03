import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Faqs() {
  return (
    <div>
        
        <Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">FAQ<span className="text-primary">s</span> </h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">FAQs</span>
      </nav>
    </div>
  </div>
</section>

<section className="faqs-wrap">
  <div className="container py-5 my-5">
    <div className="row my-4">
      <main className="col-md-8 pe-5">
        <h2 className="mb-3">Frequently asked questions</h2>
        <p>Malesuada nunc vel risus commodo viverra. Viverra accumsan in nisl nisi. Pretium nibh ipsum
          consequat
          nisl
          vel pretium. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
        <div className="page-content my-5">

          <div className="accordion mb-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h5> How to Get a Quote? </h5>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h5> Do i need to open an account compulsory? </h5>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h5> Can i get discounts ? </h5>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <h5> Do i have to pay extra for delivery? </h5>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <h5> Can i cancel my Delivery? </h5>
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  <h5> What’s your refund policy? </h5>
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  <h5> I haven’t received my delivery details </h5>
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  <h5> How is delivery charge determined? </h5>
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  <h5> Where is your shop located? </h5>
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine">
                <div className="accordion-body secondary-font">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque
                  felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
                  ligula
                  vulputate sem tristique cursus.
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <div className="inquiry-item col-md-4">
        <h3 className="section-title mb-3">Ask us anything</h3>
        <p>Call Us +123 987 456 or just drop us your message at <Link to="mailto:contact@yourcompany.com">contact@yourcompany.com</Link>. You can directly message
          us. </p>
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
            <textarea placeholder="Write Your Message Here" className="form-control ps-3" rows="8"></textarea>
          </div>
          <div className="d-grid">
            <button className="btn btn-arrow btn-primary btn-lg btn-pill btn-dark fs-6">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section id="register" style={{background: "url('images/background-img.png') no-repeat;"}}>
  <div className="container ">
    <div className="row my-5 py-5">
      <div className="offset-md-3 col-md-6 my-5 ">
        <h2 className="display-3 fw-normal text-center">Get 20% Off on <span className="text-primary">first Purchase</span>
        </h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="Enter Your Email Address" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control form-control-lg" name="email" id="password1" placeholder="Create Password" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control form-control-lg" name="email" id="password2" placeholder="Repeat Password" />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark btn-lg rounded-1">Register it now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section id="service">
  <div className="container pt-5 mt-5">
    <div className="row g-md-5 pt-4">
      <div className="col-md-3 my-3">
        <div className="card">
          <div>
            <iconify-icon className="service-icon text-primary" icon="la:shopping-cart"></iconify-icon>
          </div>
          <h3 className="card-title py-2 m-0">Free Delivery</h3>
          <div className="card-text">
            <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 my-3">
        <div className="card">
          <div>
            <iconify-icon className="service-icon text-primary" icon="la:user-check"></iconify-icon>
          </div>
          <h3 className="card-title py-2 m-0">100% secure payment</h3>
          <div className="card-text">
            <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 my-3">
        <div className="card">
          <div>
            <iconify-icon className="service-icon text-primary" icon="la:tag"></iconify-icon>
          </div>
          <h3 className="card-title py-2 m-0">Daily Offer</h3>
          <div className="card-text">
            <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 my-3">
        <div className="card">
          <div>
            <iconify-icon className="service-icon text-primary" icon="la:award"></iconify-icon>
          </div>
          <h3 className="card-title py-2 m-0">Quality guarantee</h3>
          <div className="card-text">
            <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
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
