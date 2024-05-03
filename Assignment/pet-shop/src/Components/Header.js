import React from 'react'
import { Link } from 'react-router-dom';
// import { MDBContainer } from 'mdb-react-ui-kit';
import logo from "../images/logo.png";

export default function Header() {
    return (
        <div>

<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart" aria-labelledby="My Cart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-circle pt-2">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Grey Hoodie</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Dog Food</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Soft Toy</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </div>
        </div>
      </div>

      

            <header>
                <div className="container py-2">
                    <div className="row py-4 pb-0 pb-sm-4 align-items-center ">

                        <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                            <div className="main-logo">
                                <Link to={"/"}>
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
                                <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                                    <input type="text" className="form-control border-0 bg-transparent"
                                        placeholder="Search for more than 10,000 products" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                                    </svg>
                                </form>
                            </div>
                        </div>

                        <div
                            className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                            <div className="support-box text-end d-none d-xl-block">
                                <span className="fs-6 secondary-font text-muted">Phone</span>
                                <h5 className="mb-0">+980-34984089</h5>
                            </div>
                            <div className="support-box text-end d-none d-xl-block">
                                <span className="fs-6 secondary-font text-muted">Email</span>
                                <h5 className="mb-0">waggy@gmail.com</h5>
                            </div>



                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <hr className="m-0" />
                </div>

                <div className="container">
                    <nav className="main-menu d-flex navbar navbar-expand-lg ">

                        <div className="d-flex d-lg-none align-items-end mt-3">
                            <ul className="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link to={"/account"} className="mx-3">
                                        <iconify-icon icon="healthicons:person" className="fs-4"></iconify-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/wishlist"} className="mx-3">
                                        <iconify-icon icon="mdi:heart" className="fs-4"></iconify-icon>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"#"} className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                        aria-controls="offcanvasCart">
                                        <iconify-icon icon="mdi:cart" className="fs-4 position-relative"></iconify-icon>
                                        <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                                            03
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"#"} className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch"
                                        aria-controls="offcanvasSearch">
                                        <iconify-icon icon="tabler:search" className="fs-4"></iconify-icon>

                                    </Link>
                                </li>
                            </ul>

                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                            <div className="offcanvas-header justify-content-center">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body justify-content-between">
                                <select className="filter-categories border-0 mb-0 me-5">
                                    <option>Shop by Category</option>
                                    <option>Clothes</option>
                                    <option>Food</option>
                                    <option>Food</option>
                                    <option>Toy</option>
                                </select>

                                <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown"
                                            aria-expanded="false">Pages</Link>
                                        <ul className="dropdown-menu" aria-labelledby="pages">
                                            <li><Link to={"/about"} className="dropdown-item">About Us</Link></li>
                                            <li><Link to={"/shop"} className="dropdown-item">Shop</Link></li>
                                            <li><Link to={"/single-product"} className="dropdown-item">Single Product</Link></li>
                                            <li><Link to={"/cart"} className="dropdown-item">Cart</Link></li>
                                            <li><Link to={"/wishlist"} className="dropdown-item">Wishlist</Link></li>
                                            <li><Link to={"/checkout"} className="dropdown-item">Checkout</Link></li>
                                            <li><Link to={"/blog"} className="dropdown-item">Blog</Link></li>
                                            <li><Link to={"/single-post"} className="dropdown-item">Single Post</Link></li>
                                            <li><Link to={"/contact"} className="dropdown-item">Contact</Link></li>
                                            <li><Link to={"/faqs"} className="dropdown-item">FAQs</Link></li>
                                            <li><Link to={"/account"} className="dropdown-item">Account</Link></li>
                                            <li><Link to={"/thank-you"} className="dropdown-item">Thankyou</Link></li>
                                            <li><Link to={"/error"} className="dropdown-item">Error 404</Link></li>
                                            <li><Link to={"/styles"} className="dropdown-item">Styles</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/shop"} className="nav-link">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/blog"} className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"#"} className="nav-link">Others</Link>
                                    </li>
                                    
                                </ul>

                                <div class="d-none d-lg-flex align-items-end">
                                    <ul class="d-flex justify-content-end list-unstyled m-0">
                                        <li>
                                            <Link to={"/account"} className="mx-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="dark" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/wishlist"} className="mx-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="dark">
                                                    <path d="M4 16C1 12 2 6.00004 7 4.00004C12 2.00004 15 6.00004 16 8.00004C17 6.00004 21 2.00004 26 4.00004C31 6.00004 31 12 28 16C25 20 16 28 16 28C16 28 7 20 4 16Z" stroke="#848484" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>

                                        <li className="">
                                            <Link to="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                                aria-controls="offcanvasCart">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="dark" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg>
                                                <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                                                    03
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </nav>



                </div>
            </header>
        </div>
    )
}
