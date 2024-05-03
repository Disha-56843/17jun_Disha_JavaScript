import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Service from './Service'
import Register from './Register'
import item2 from "../images/item2.jpg"
import item5 from "../images/item5.jpg"
import item7 from "../images/item7.jpg"
import item8 from "../images/item8.jpg"
import item9 from "../images/item9.jpg"
import item10 from "../images/item10.jpg"
import item13 from "../images/item13.jpg"
import item14 from "../images/item14.jpg"
import item16 from "../images/item16.jpg"


export default function Shop() {
  return (
    <div>

    
  
    
  
    
  
    <Header />
  
    <section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
      <div className="container">
        <div className="hero-content py-5 my-3">
          <h2 className="display-1 mt-3 mb-0">Shop</h2>
          <nav className="breadcrumb">
            <Link className="breadcrumb-item nav-link" to="#">Home</Link>
            <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
            <span className="breadcrumb-item active" aria-current="page">Shop</span>
          </nav>
        </div>
      </div>
    </section>
  
    <div className="shopify-grid">
      <div className="container py-5 my-5">
        <div className="row flex-md-row-reverse g-md-5 mb-5">
  
          <main className="col-md-9">
            <div className="filter-shop d-md-flex justify-content-between align-items-center">
              <div className="showing-product">
                <p className="m-0">Showing 1-9 of 55 results</p>
              </div>
              <div className="sort-by">
                <select className="filter-categories border-0 m-0">
                  <option value="">Default sorting</option>
                  <option value="">Name (A - Z)</option>
                  <option value="">Name (Z - A)</option>
                  <option value="">Price (Low-High)</option>
                  <option value="">Price (High-Low)</option>
                  <option value="">Rating (Highest)</option>
                  <option value="">Rating (Lowest)</option>
                  <option value="">Model (A - Z)</option>
                  <option value="">Model (Z - A)</option>
                </select>
              </div>
            </div>
  
            <div className="product-grid row ">
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to="single-product.html"><img src={item7} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div>
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item10} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item5} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  Sold
                </div>
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item8} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item13} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to={"single-product"}>
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item14} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to={"single-product"}>
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  Sale
                </div>
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item9} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item16} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
              <div className="col-md-4 my-4">
                {/* <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  New
                </div> */}
                <div className="card position-relative">
                  <Link to={"single-product"}><img src={item2} className="img-fluid rounded-4" alt="image" /></Link>
                  <div className="card-body p-0">
                    <Link to="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </Link>
  
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                        5.0</span>
  
                      <h3 className="secondary-font text-primary">$18.00</h3>
  
                      <div className="d-flex flex-wrap mt-3">
                        <Link to="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </Link>
                        <Link to="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                        </Link>
                      </div>
  
  
                    </div>
  
                  </div>
                </div>
              </div>
  
            </div>
             {/* product-grid  */}
  
            <nav className="navigation paging-navigation text-center mt-5" role="navigation">
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
  
          </main>
          <aside className="col-md-3 mt-5">
            <div className="sidebar">
              <div className="widget-menu">
                <div className="widget-search-bar">
                  <div className="search-bar border rounded-2 border-dark-subtle pe-3">
                    <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                      <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for products" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"></path>
                      </svg>
                    </form>
                  </div>
                </div>
              </div>
              <div className="widget-product-categories pt-5">
                <h4 className="widget-title">Categories</h4>
                <ul className="product-categories sidebar-list list-unstyled">
                  <li className="cat-item">
                    <Link to="/collections/categories">All</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="#" className="nav-link">Dogs</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="#" className="nav-link">Food</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="#" className="nav-link">Cats</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="#" className="nav-link">Birds</Link>
                  </li>
                </ul>
              </div>
              <div className="widget-product-tags pt-3">
                <h4 className="widget-title">Tags</h4>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Pets</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Clothes</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Foods</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Toys</Link>
                  </li>
                </ul>
              </div>
              <div className="widget-product-brands pt-3">
                <h4 className="widget-title">Brands</h4>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Denim</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Puma</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Klaws</Link>
                  </li>
                </ul>
              </div>
              <div className="widget-price-filter pt-3">
                <h4 className="widget-titlewidget-title">Filter By Price</h4>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <Link to="#" className="nav-link">Less than $10</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">$10- $20</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">$20- $30</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">$30- $40</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="#" className="nav-link">$40- $50</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  
    
  
    <Register />
  
    <Service />
  
    <Footer />
  
  
   
  </div>
  )
}
