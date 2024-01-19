import React from 'react'
import { Link } from 'react-router-dom';
import mainlogo from '../Assests/images/main-logo.png'

export default function Header() {
  return (
    <div>
        <header id="header" className=" content-light ">
                <div className="header-wrap container py-3">
                    <div className="row align-items-center">
                        <div className="primary-nav col-md-5 col-sm-2">
                            <nav className="navbar">
                                <div className="main-menu">
                                    <ul className="menu-list  list-unstyled d-flex m-0 ">
                                        <li className="menu-itemhome1 dropdown">
                                            <Link className="text-uppercase item-anchor dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false"> Home </Link>
                                            <ul className="dropdown-menu">
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item" to="index.html">
                                                    Home version 1</Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="home-v2.html">Home version 2 &nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-itemhome1">
                                            <Link to="about-us.html" className="text-uppercase item-anchor">About</Link>
                                        </li>
                                        <li className="menu-itemhome1 dropdown">
                                            <Link className="text-uppercase item-anchor dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false"> Shop </Link>
                                            <ul className="dropdown-menu">
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item" to="shop.html">Shop
                                                    sidebar &nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="single-product.html">Single product &nbsp;<span className="badge bg-secondary">pro</span></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-itemhome1 dropdown">
                                            <Link className="text-uppercase item-anchor dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false"> blog </Link>
                                            <ul className="dropdown-menu">
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item" to="blog.html">blog
                                                    classNameic&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="blog-with-sidebar.html">Blog sidebar&nbsp;<span className="badge bg-secondary">pro</span></Link>
                                                </li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="single-post.html">Single post&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-itemhome1 dropdown">
                                            <Link className="text-uppercase item-anchor dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false"> Pages </Link>
                                            <ul className="dropdown-menu">
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="contact.html">contact&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="cart.html">cart&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="checkout.html">checkout&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                                <li className="sub-page pe-0"><Link className="text-black text-uppercase dropdown-item"
                                                    to="my-account.html">account&nbsp;<span className="badge bg-secondary">pro</span></Link></li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <div className="hamburger">
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-4 brand-block ">
                            <div className="main-logo text-lg-center">
                                <Link to={"index"}>
                                    <img src={mainlogo} alt="logo" className="brand-image" />
                                </Link>
                            </div>
                        </div>
                        <div className="right-block col-md-5 col-sm-4">
                            <nav className="navbar justify-content-end">
                                <div className="user-items">
                                    <ul className="list-unstyled content-light d-flex align-items-center m-0">
                                        <li>
                                            <i className="icon icon-user"></i>
                                            <Link to="my-account.html" className="text-uppercase item-anchor">Login</Link>
                                        </li>
                                        <li className="search-item">
                                            <div className="search-bar">
                                                <form action="/action_page.php" className="search-form d-flex no-margin">
                                                    <i className="icon icon-search"></i>
                                                    <input type="text" placeholder="SEARCH.." name="search" className="title-placeholder no-margin text-light " />
                                                </form>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#" className="like">
                                                <i className="icon icon-like"></i>
                                                <span>(0)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="cart for-buy">
                                                <i className="icon icon-shopping-cart"></i>
                                                <span>(0)</span>
                                            </Link>
                                        </li>
                                        <li className="menu-itemhome1">
                                            <Link to="https://templatesjungle.gumroad.com/l/swanky-ecommerce-bootstrap-website-template" className="text-uppercase fw-bold fs-6 item-anchor">GET PRO</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}
