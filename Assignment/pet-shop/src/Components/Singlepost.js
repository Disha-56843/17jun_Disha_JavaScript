import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';
import bloglarge from "../images/blog-large.jpg"
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import insta1 from "../images/insta1.jpg"
import insta2 from "../images/insta2.jpg"
import insta3 from "../images/insta3.jpg"
import insta4 from "../images/insta4.jpg"
import reviewer1 from "../images/reviewer-1.jpg"
import reviewer2 from "../images/reviewer-2.jpg"
import reviewer3 from "../images/reviewer-3.jpg"

export default function Singlepost() {
    return (
        <div>

            <Header />

            <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Single <span className="text-primary">Post</span> </h2>
                        <nav className="breadcrumb">
                            <Link className="breadcrumb-item nav-link" to="#">Home</Link>
                            <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
                            <span className="breadcrumb-item active" aria-current="page">Single Post</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="mt-5">
                        <div className="post-meta">
                            <span className="post-category">Pets</span> / <span className="meta-date">Feb 22, 2023</span>
                        </div>
                        <h1 className="page-title">10 Reasons to be helpful towards any animals</h1>
                    </div>
                </div>
            </section>


            <div className="container fluid">
                <div className="row">
                    <main className="post-grid">
                        <div className="row">
                            <article className="post-item">
                                <div className="post-content">
                                    <div className="post-thumbnail mb-5">
                                        <img src={bloglarge} alt="single-post" className="img-fluid" />
                                    </div>
                                    <div className="post-description py-4">
                                        <p>
                                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa
                                                magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna
                                                diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas
                                                neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est
                                                euismod.</strong>
                                        </p>
                                        <p>Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non
                                            aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu
                                            amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat.
                                            Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum
                                            eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare.
                                            Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt
                                            nunc integer sit.</p>
                                        <blockquote>“Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor
                                            curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus,
                                            vel.</blockquote>

                                        <div className="row align-items-center mb-5">
                                            <div className="col-12 col-md-6">
                                                <p>
                                                    <strong>Consectetur Facilisis Vivamus</strong>
                                                </p>
                                                <ul style={{ listStyleType: "disc" }} className="inner-list">
                                                    <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                                                    <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                                                    <li>Laculis sit sapien hac odio elementum egestas neque.</li>
                                                    <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                                                    <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                                                    <li>Laculis sit sapien hac odio elementum egestas neque.</li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <img src={blog3} alt="post-image" className="img-fluid" />

                                            </div>
                                        </div>

                                        <p>Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum
                                            erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque
                                            bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit
                                            ornare. Purus ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.</p>
                                        <p>Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum
                                            erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque
                                            bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit
                                            ornare. Purus ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.</p>
                                        <div className="d-none d-xl-flex justify-content-between">
                                            <img src={insta1} alt="post-image" className="img-fluid" />
                                            <img src={insta2} alt="post-image" className="img-fluid" />
                                            <img src={insta3} alt="post-image" className="img-fluid" />
                                            <img src={insta4} alt="post-image" className="img-fluid" />
                                        </div>
                                        <p>
                                            <strong>Velit, praesent pharetra malesuada</strong>
                                        </p>
                                        <p>Id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam
                                            pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam
                                            tellus viverra lacus.</p>
                                        <p>Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa
                                            ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam
                                            nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio
                                            mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.</p>
                                        <p>Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et,
                                            dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget
                                            ullamcorper urna, elit ac diam tellus viverra lacus.</p>

                                        <div className="post-tags mt-5">
                                            <div className="block-tag col-md-12">
                                                <ul className="list-unstyled d-flex">
                                                    <li className="pe-3">
                                                        <Link to="#" className="btn btn-dark fs-6 py-2 px-3">Pets</Link>
                                                    </li>
                                                    <li className="pe-3">
                                                        <Link to="#" className="btn btn-dark fs-6 py-2 px-3">Puppy</Link>
                                                    </li>
                                                    <li className="pe-3">
                                                        <Link to="#" className="btn btn-dark fs-6 py-2 px-3">Cat</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="single-post-navigation" className="my-5">
                                        <div className="post-navigation d-flex flex-wrap align-items-center justify-content-between">
                                            <Link itemprop="url" className="post-prev d-flex flex-column text-decoration-none" to="#" title="Previous Post">
                                                <span className="text-muted">Previous</span>
                                                <h3 className="page-nav-title">How to know your pet is hungry</h3>
                                            </Link>
                                            <Link itemprop="url" className="post-next d-flex flex-column text-decoration-none" to="#" title="Next Post">
                                                <span className="text-muted">Next</span>
                                                <h3 className="page-nav-title">Best home for your pets in 2023</h3>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </article>

                            {/* comments  */}
                            <section id="post-comment">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comments-wrap">
                                                <h2 className="display-6 fw-normal text-dark my-5">
                                                    <span className="count">3</span> Comments
                                                </h2>
                                                <div className="comment-list padding-small">
                                                    <article className="comment-item d-flex flex-wrap mb-3">
                                                        <div className="col-lg-1 col-sm-3 me-4 mb-3">
                                                            <img src={reviewer1} alt="default" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="col-lg-10 col-sm-9 author-wrap">
                                                            <div className="author-post">
                                                                <div className="comment-meta d-flex">
                                                                    <h4 className="author-name text-dark pe-1">Sam Smith</h4>
                                                                    <span className="meta-date text-muted">Jul 10</span>
                                                                </div>
                                                                <p className="no-margin">Mattis pulvinar non viverra donec pellentesque. Odio mi consequat
                                                                    libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in
                                                                    interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna.</p>
                                                                <div className="comments-reply">
                                                                    <Link to="#" className="text-decoration-underline text-dark">Reply Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className="comment-item d-flex child-comments flex-wrap ps-5 mb-3">
                                                        <div className="col-lg-1 col-sm-3 me-4 mb-3">
                                                            <img src={reviewer2} alt="default" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="col-lg-10 col-sm-9 author-wrap">
                                                            <div className="author-post">
                                                                <div className="comment-meta d-flex">
                                                                    <h4 className="author-name text-dark pe-1">Santie Mary</h4>
                                                                    <span className="meta-date text-muted">Jul 10</span>
                                                                </div>
                                                                <p className="no-margin">Tristique tempis condimentum diam done ullancomroer sit element
                                                                    henddg sit he consequert.Tristique tempis condimentum diam done ullancomroer sit element
                                                                    henddg sit he consequert.</p>
                                                                <div className="comments-reply">
                                                                    <Link to="#" className="text-decoration-underline text-dark">Reply Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className="comment-item d-flex flex-wrap">
                                                        <div className="col-lg-1 col-sm-3 me-4 mb-3">
                                                            <img src={reviewer3} alt="default" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="col-lg-10 col-sm-9 author-wrap">
                                                            <div className="author-post">
                                                                <div className="comment-meta d-flex">
                                                                    <h4 className="author-name text-dark pe-1">Analisa Nora</h4>
                                                                    <span className="meta-date text-muted">Jul 10</span>
                                                                </div>
                                                                <p className="no-margin">Tristique tempis condimentum diam done ullancomroer sit element
                                                                    henddg sit he consequert.Tristique tempis condimentum diam done ullancomroer sit element
                                                                    henddg sit he consequert.</p>
                                                                <div className="comments-reply">
                                                                    <Link to="#" className="text-decoration-underline text-dark">Reply Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="comment-respond pt-3 mt-5">
                                                <h2 className="display-6 fw-normal text-dark my-5">Leave a Comment</h2>

                                                <form id="form" className="form-group flex-wrap">
                                                    <div className="form-input col-lg-12 d-flex mb-3">
                                                        <input type="text" name="email" placeholder="Write Your Name Here*" className="form-control ps-3 me-3" />
                                                        <input type="text" name="email" placeholder="Write Your Email Here*" className="form-control ps-3" />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <textarea placeholder="Write Your Message Here*" className="form-control ps-3" rows="8"></textarea>
                                                    </div>
                                                    <div className="d-grid">
                                                        <button className="btn btn-arrow btn-primary btn-lg btn-pill btn-dark fs-6">Submit</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* comments  */}

                        </div>
                    </main>
                </div>
            </div>


            <section id="latest-blog" className="my-5">
                <div className="container py-5 my-5">
                    <div className="row mt-5">
                        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
                            <h2 className="display-3 fw-normal">Recent Blog Post</h2>
                            <div>
                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                    Read all
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
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




            <Footer />


        </div >
  )
}
