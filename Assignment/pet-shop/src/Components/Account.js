import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Header from './Header';


export default function Account() {
    return (
        <div>

            <Header />

            <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Account</h2>
                        <nav className="breadcrumb">
                            <Link className="breadcrumb-item nav-link" to="#">Home</Link>
                            <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
                            <span className="breadcrumb-item active" aria-current="page">Account</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="login-tabs padding-large">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="tabs-listing">
                            <nav>
                                <div className="nav nav-tabs d-flex justify-content-center border-dark-subtle mb-3" id="nav-tab" role="tablist">
                                    <button className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase active" id="nav-sign-in-tab" data-bs-toggle="tab" data-bs-target="#nav-sign-in" type="button" role="tab" aria-controls="nav-sign-in" aria-selected="true">Log In</button>
                                    <button className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase" id="nav-register-tab" data-bs-toggle="tab" data-bs-target="#nav-register" type="button" role="tab" aria-controls="nav-register" aria-selected="false" tabindex="-1">Sign Up</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel" aria-labelledby="nav-sign-in-tab">
                                    <div className="col-lg-8 offset-lg-2 mt-5">

                                        <p className="mb-0">Log-In With Social</p>
                                        <hr className="my-1" />
                                        <div className="row mt-4 mb-5">
                                            <div className="d-grid col-md-6 my-2">
                                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        <iconify-icon icon="ion:logo-google" className="signup-social-icon me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google me-2" viewBox="0 0 16 16">
                                                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                                            </svg>
                                                        </iconify-icon>
                                                        <p className="mb-0">Google</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="d-grid col-md-6 my-2">
                                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        <iconify-icon icon="ion:logo-facebook" className="signup-social-icon me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-2" viewBox="0 0 16 16">
                                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                            </svg>
                                                        </iconify-icon>
                                                        <p className="mb-0">Facebook</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                        <p className="mb-0">Or Log-In With Email</p>
                                        <hr className="my-1" />

                                        <form id="form1" className="form-group flex-wrap ">
                                            <div className="form-input col-lg-12 my-4">

                                                <input type="text" id="exampleInputEmail1" name="email" placeholder="Enter email address" className="form-control mb-3 p-4" />
                                                <input type="password" id="inputPassword1" placeholder="Enter password" className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />

                                                <label className="py-3 d-flex flex-wrap justify-content-between">
                                                    <div>
                                                        <input type="checkbox" required="" className="d-inline" />
                                                        <span className="label-body ">Remember Me</span>
                                                    </div>

                                                    <div id="passwordHelpBlock" className="form-text ">
                                                        <Link to="forget-password" className="text-primary  fw-bold"> Forgot Password?</Link>
                                                    </div>
                                                </label>
                                                <div className="d-grid my-3">
                                                    <Link to="#" className="btn btn-dark btn-lg rounded-1">Log In</Link>
                                                </div>

                                            </div>
                                        </form>

                                    </div>

                                </div>
                                <div className="tab-pane fade" id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab">
                                    <div className="col-lg-8 offset-lg-2 mt-5">

                                        <p className="mb-0">Sign-up With Social</p>
                                        <hr className="my-1" />
                                        <div className="row mt-4 mb-5">
                                            <div className="d-grid col-md-6 my-2">
                                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        <iconify-icon icon="ion:logo-google" className="signup-social-icon me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google me-2" viewBox="0 0 16 16">
                                                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                                            </svg>
                                                        </iconify-icon>
                                                        <p className="mb-0">Google</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="d-grid col-md-6 my-2">
                                                <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        <iconify-icon icon="ion:logo-facebook" className="signup-social-icon me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-2" viewBox="0 0 16 16">
                                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                            </svg>
                                                        </iconify-icon>
                                                        <p className="mb-0">Facebook</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                        <p className="mb-0">Or Sign-Up With Email</p>
                                        <hr className="my-1" />

                                        <form id="form1" className="form-group flex-wrap ">
                                            <div className="form-input col-lg-12 my-4">

                                                <input type="text" id="exampleInputName" name="email" placeholder="Your full name" className="form-control mb-3 p-4" />
                                                <input type="text" id="exampleInputEmail1" name="email" placeholder="Your email address" className="form-control mb-3 p-4" />
                                                <input type="password" id="inputPassword1" placeholder="Set your password" className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />
                                                <input type="password" id="inputPassword2" placeholder="Retype your password" className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />

                                                <label className="py-3 d-flex flex-wrap justify-content-between">
                                                    <div>
                                                        <input type="checkbox" required="" className="d-inline" />
                                                        <span className="label-body ">Remember Me</span>
                                                    </div>

                                                    <div id="passwordHelpBlock" className="form-text ">
                                                        <Link to="forgot-password" className="text-primary  fw-bold"> Forgot Password?</Link>
                                                    </div>
                                                </label>
                                                <div className="d-grid my-3">
                                                    <Link to="#" className="btn btn-dark btn-lg rounded-1">Sign Up</Link>
                                                </div>

                                            </div>
                                        </form>

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
