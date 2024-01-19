import React from 'react'
import Footer from './Footer'
import Service from './Service'
import Register from './Register'
import Header from './Header'
import { Link } from 'react-router-dom'
import item1 from "../images/item1.jpg";
import item5 from "../images/item5.jpg"
import item9 from "../images/item9.jpg"


export default function Cart() {
    return (
        <div>





            <Header />



            <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
                <div className="container">
                    <div className="hero-content py-5 my-3">
                        <h2 className="display-1 mt-3 mb-0">Cart</h2>
                        <nav className="breadcrumb">
                            <Link className="breadcrumb-item nav-link" to="#">Home</Link>
                            <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
                            <span className="breadcrumb-item active" aria-current="page">Cart</span>
                        </nav>
                    </div>
                </div>
            </section>

            <section id="cart" className="my-5 py-5">
                <div className="container">
                    <div className="row g-md-5">
                        <div className="col-md-8 pe-md-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="card-title text-uppercase">Product</th>
                                        <th scope="col" className="card-title text-uppercase">Quantity</th>
                                        <th scope="col" className="card-title text-uppercase">Subtotal</th>
                                        <th scope="col" className="card-title text-uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row" className="py-4">
                                            <div className="cart-info d-flex flex-wrap align-items-center ">
                                                <div className="col-lg-3">
                                                    <div className="card-image">
                                                        <img src={item1} alt="cloth" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="card-detail ps-3">
                                                        <h5 className="card-title">
                                                            <Link to="#" className="text-decoration-none">Grey Hoodie</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="input-group product-qty align-items-center w-75">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                                        </svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number text-center p-2 mx-1" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="total-price">
                                                <span className="secondary-font fw-medium">$150.00</span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="cart-remove">
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="py-4">
                                            <div className="cart-info d-flex flex-wrap align-items-center ">
                                                <div className="col-lg-3">
                                                    <div className="card-image">
                                                        <img src={item9} alt="cloth" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="card-detail ps-3">
                                                        <h5 className="card-title">
                                                            <Link to="#" className="text-decoration-none">Dog Food</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="input-group product-qty align-items-center w-75">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                                        </svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number text-center p-2 mx-1" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="total-price">
                                                <span className="secondary-font fw-medium">$90.00</span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="cart-remove">
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="py-4">
                                            <div className="cart-info d-flex flex-wrap align-items-center ">
                                                <div className="col-lg-3">
                                                    <div className="card-image">
                                                        <img src={item5} alt="cloth" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="card-detail ps-3">
                                                        <h5 className="card-title">
                                                            <Link to="#" className="text-decoration-none">Cat Home</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="input-group product-qty align-items-center w-75">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                                        </svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number text-center p-2 mx-1" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="total-price">
                                                <span className="secondary-font fw-medium">$260.00</span>
                                            </div>
                                        </td>
                                        <td className="py-4 align-middle">
                                            <div className="cart-remove">
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <div className="cart-totals">
                                <h2 className="pb-4">Cart Total</h2>
                                <div className="total-price pb-4">
                                    <table cellspacing="0" className="table text-uppercase">
                                        <tbody>
                                            <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                                                <th>Subtotal</th>
                                                <td data-title="Subtotal">
                                                    <span className="price-amount amount text-dark ps-5">

                                                        <span className="price-currency-symbol">$</span>1,500.00

                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="order-total pt-2 pb-2 border-bottom">
                                                <th>Total</th>
                                                <td data-title="Total">
                                                    <span className="price-amount amount text-dark ps-5">

                                                        <span className="price-currency-symbol">$</span>1,500.00
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="button-wrap row g-2">
                                    <div className="col-md-6"><button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">Update Cart</button>
                                    </div>
                                    <div className="col-md-6"><button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">Continue To
                                        Shop</button></div>
                                    <div className="col-md-12"><Link to="checkout.html" style={{ background: " #e9b775" }} className="btn p-3 text-uppercase rounded-1 w-100">Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Register />

            <Service />

            <Footer />


        </div>
    )
}
