import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Link } from 'react-router-dom';


export default function ThankYou() {
  return (
    <div>
        
        <Header/>

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container py-5 my-3">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">Thankyou for <span className="text-primary">the Purchase !!!</span> </h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">Thankyou</span>
      </nav>
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
                  <ul className="d-flex list-unstyled gap-2">
                                        <li className="social">
                                            <Link to="#">

                                                <iconify-icon class="social-icon" icon="ri:pinterest-fill">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                                                </iconify-icon>
                                            </Link>
                                        </li>
                                        <li className="social">
                                            <Link to="#">
                                                <iconify-icon class="social-icon" icon="ri:pinterest-fill">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.213 5.656a8.384 8.384 0 0 1-2.402.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164"></path></svg>
                                                </iconify-icon>
                                            </Link>
                                        </li>
                                        <li className="social">
                                            <Link to="#">
                                                <iconify-icon class="social-icon" icon="ri:pinterest-fill">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.372 2.094a10.003 10.003 0 0 0-5.369 19.074a7.756 7.756 0 0 1 .162-2.292c.185-.839 1.296-5.463 1.296-5.463a3.738 3.738 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.897 0 3.17-2.431 3.17-5.301c0-2.201-1.457-3.847-4.143-3.847a4.746 4.746 0 0 0-4.93 4.793a2.96 2.96 0 0 0 .648 1.97a.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.785a.354.354 0 0 1-.51.253c-1.384-.554-2.036-2.077-2.036-3.816c0-2.847 2.384-6.255 7.154-6.255c3.796 0 6.319 2.777 6.319 5.747c0 3.909-2.176 6.848-5.393 6.848a2.861 2.861 0 0 1-2.454-1.246s-.579 2.316-.692 2.754a8.025 8.025 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.988 9.988 0 0 0 9.996-10.002a10.002 10.002 0 0 0-8.635-9.904"></path></svg>
                                                </iconify-icon>
                                            </Link>
                                        </li>
                                        <li className="social">
                                            <Link to="#">
                                                <iconify-icon class="social-icon" icon="ri:pinterest-fill">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg>
                                                </iconify-icon>
                                            </Link>
                                        </li>
                                        <li className="social">
                                            <Link to="#">
                                                <iconify-icon class="social-icon" icon="ri:pinterest-fill">

                                                    <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"></path></svg>
                                                </iconify-icon>
                                            </Link>
                                        </li>

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
