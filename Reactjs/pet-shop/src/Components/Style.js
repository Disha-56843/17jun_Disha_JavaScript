import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
// import postthumb2 from "./images/p"


export default function Style() {
    return (
        <div>

            <Header />

            <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Styles And Element</h2>
                        <nav className="breadcrumb">
                            <Link className="breadcrumb-item nav-link" to="#">Home</Link>
                            <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
                            <span className="breadcrumb-item active" aria-current="page">Style</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row mb-3">

                        <div className="col-md-6">

                            <h1>Sample Heading 1</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="col-md-6">

                            <h2>Sample Heading 2</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <h3>Sample Heading 3</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="col-md-4">

                            <h4>Sample Heading 4</h4>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="col-md-4">

                            <h5>Sample Heading 5</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                            <h2>Images and Lightboxes</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <figure>
                                <img src={blog1} alt="Sample Image" className="img-fluid" />
                                <figcaption>Sample Caption</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <figure>
                                <Link to="images/blog2.jpg" title="Waggy Shop" className="image-link"><img src={blog2} alt="Sample Image" className="img-fluid" /></Link>
                                <figcaption>Opens up Lighbox Gallery</figcaption>
                            </figure>
                        </div>
                    </div>

                </div>
            </section>

            <section className="my-3">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <h2 className="section-title text-center mb-5">Toggles and Accordions</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                            plugin adds the appropriate classNamees that we use to style each element. These classNamees control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                            plugin adds the appropriate classNamees that we use to style each element. These classNamees control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                                            plugin adds the appropriate classNamees that we use to style each element. These classNamees control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="my-3">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h2>Tabs and Toggles</h2>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-12">
                            <blockquote>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                                    tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
                            </blockquote>
                            <p>
                                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
                                ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
                                tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
                                cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
                                mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            {/* <img src={postthumb2} className="float-end" /> */}

                            <p><span className="dropcap">P</span>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                                libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
                                sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
                                sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
                                lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. <span className="highlight">Praesent
                                    dapibus, neque id cursus</span> faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
                                Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

                            <h3 className="mt-5">Paragraph</h3>
                            <p>Pellentesque <strong>habitant morbi tristique senectus et netus et</strong> malesuada fames ac turpis
                                egestas. sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
                                ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
                                tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.</p>

                            <p>Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus sit
                                amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
                                amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
                                enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
                                faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                                tincidunt quis, accumsan porttitor, facilisis luctus, metus </p>
                            <blockquote className="pullquote-right">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                                ante.</blockquote> Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                            placerat eleifend leo. <Link to="#">Quisque</Link> sit amet est et sapien ullamcorper pharetra. Vestibulum erat
                            wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                            condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
                            facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
                            magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
                            metus<p></p>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <h3>Unordered List</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul>

                        </div>
                        <div className="col-md-6">
                            <h3>Ordered List</h3>
                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ol>

                        </div>
                    </div>

                    <div className="container-fluid px-4 py-5" id="icon-grid">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 py-5">
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-search fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-calendar4-week"></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-calendar4 fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-cart3 fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-person fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-menu-down fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-check2 fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <i class="bi bi-heart fs-3 me-2" style={{ lineHeight: "1" }}></i>
                                <div>
                                    <h4 className="fw-bold mb-0">Featured title</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <hr />
                        <div className="col-md-6">

                            <h3>Table</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="col-md-6">

                            <h3>Table Striped</h3>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div className="row my-3">
                        <div className="col-md-12">
                            {/* <pre className="pre"><code>.some-className {
            backgroundColor="red"
          }</code></pre> */}

                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h2>Tabs and Toggles</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="bootstrap-tabs">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1">Profile</button>
                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" tabindex="-1">Contact</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Lorem
                                        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.</div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Ut enim ad
                                        minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim
                                        veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse1" aria-expanded="true" aria-controls="accordion-collapse1">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse2" aria-expanded="false" aria-controls="accordion-collapse2">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse3" aria-expanded="false" aria-controls="accordion-collapse3">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-12">
                            <h3>Button Sizes</h3>
                            <button type="button" className="btn btn-primary btn-sm">small</button>
                            <button type="button" className="btn btn-primary btn-lg">large</button>

                            <hr />

                            <h3>Button Styles</h3>

                            <button type="button" className="btn btn-outline-dark">Outline Dark</button>
                            <button type="button" className="btn btn-outline-primary">Outline Primary</button>
                            <button type="button" className="btn btn-outline-success rounded-pill">Outline Success Pill</button>
                            <button type="button" className="btn btn-outline-danger rounded-pill">Outline Danger Pill</button>

                            <hr />

                            <h3>Button Colors</h3>

                            <button type="button" className="btn btn-primary">primary</button>
                            <button type="button" className="btn btn-secondary">secondary</button>
                            <button type="button" className="btn btn-info rounded-pill">info Pill</button>
                            <button type="button" className="btn btn-dark rounded-pill">dark Pill</button>
                            <button type="button" className="btn btn-warning rounded-pill">warning Pill</button>
                            <button type="button" className="btn btn-success rounded-pill">success Pill</button>
                            <button type="button" className="btn btn-danger rounded-pill">danger Pill</button>

                            <hr />

                            <h3>Extra Large Button</h3>

                            <div className="d-grid">
                                <button className="btn btn-secondary w-100 btn-lg">Extra Large Full Width Button</button>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-md-12">
                            <h2>Forms</h2>
                        </div>
                        <div className="col-md-6">
                            {/* Standard Headings */}
                            <h1>Heading</h1>
                            <h2>Heading</h2>
                            <h3>Heading</h3>
                            <h4>Heading</h4>
                            <h5>Heading</h5>
                            <h6>Heading</h6>

                            {/* Base type size */}
                            <p>The base type is 15px over 1.6 line height (24px)</p>

                            {/* Other styled text tags  */}
                            <strong>Bolded</strong>
                            <em>Italicized</em>
                            <Link>Colored</Link>
                            <u>Underlined</u>
                        </div>
                        <div className="col-md-6">

                            <form name="contactform" action="contact.php" method="post" className="form-group contact-form mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" minlength="2" name="name" placeholder="Name" className="form-control" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" placeholder="E-mail" className="form-control" required="" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">

                                        <textarea className="form-control mt-4 mb-4" name="message" placeholder="Message" style={{ height: "150px" }} required=""></textarea>

                                        <label>
                                            <input type="checkbox" required="" />
                                            <span className="label-body">I agree all the <Link to="#">Terms and Conditions</Link></span>
                                        </label>

                                        <div className="d-grid">
                                            <button type="submit" name="submit" className="btn btn-dark">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <h2 className="display-6 text-center mb-4">Pricing Tables</h2>

                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Free</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Pro</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>20 users included</li>
                                        <li>10 GB of storage</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-white bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">Enterprise</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="display-6 text-center mb-4">Compare plans</h2>

                    <div className="table-responsive mb-5">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "34%" }}></th>
                                    <th style={{ width: "22%" }}>Free</th>
                                    <th style={{ width: "22%" }}>Pro</th>
                                    <th style={{ width: "22%" }}>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Public</th>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Private</th>
                                    <td></td>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Permissions</th>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Sharing</th>
                                    <td></td>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Unlimited members</th>
                                    <td></td>
                                    <td><i class="bi bi-check2"></i></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Extra security</th>
                                    <td></td>
                                    <td></td>
                                    <td><i class="bi bi-check2"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

            <Footer />

        </div>
    )
}
