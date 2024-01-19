import React from 'react'
import Footer from './Footer'
import Service from './Service'
import Register from './Register'
import Header from './Header'
import { Link } from 'react-router-dom'
import item2 from "../images/item2.jpg"
import item7 from "../images/item7.jpg"
import item11 from "../images/item11.jpg"
import item14 from "../images/item14.jpg"


export default function Wishlist() {
  return (
    <div>



<Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">Wishlist</h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">Wishlist</span>
      </nav>
    </div>
  </div>
</section>

<section id="Wishlist" className="py-5 my-5">
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col" className="card-title text-uppercase">Product</th>
          <th scope="col" className="card-title text-uppercase">Unit Price</th>
          <th scope="col" className="card-title text-uppercase">Stock Status</th>
          <th scope="col" className="card-title text-uppercase"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-4">
            <div className="cart-info d-flex flex-wrap align-items-center ">
              <div className="col-lg-3">
                <div className="card-image">
                  <img src={item2} alt="cloth" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card-detail ps-3">
                  <h5 className="card-title">
                    <Link to="#" className="text-decoration-none">Jeans Jacket</Link>
                  </h5>
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">$230.00</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">In Stoke</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="d-flex align-items-center">
              <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                  cart</button></div>
              <div className="cart-remove">
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                </Link>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="py-4">
            <div className="cart-info d-flex flex-wrap align-items-center ">
              <div className="col-lg-3">
                <div className="card-image">
                  <img src={item11} alt="cloth" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card-detail ps-3">
                  <h5 className="card-title">
                    <Link to="#" className="text-decoration-none">Cat Food</Link>
                  </h5>
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">$100.00</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">In Stoke</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="d-flex align-items-center">
              <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                  cart</button></div>
              <div className="cart-remove">
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                </Link>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="py-4">
            <div className="cart-info d-flex flex-wrap align-items-center ">
              <div className="col-lg-3">
                <div className="card-image">
                  <img src={item14} alt="cloth" className="img-fluid" />
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
            <div className="total-price">
              <span className="secondary-font fw-medium">$90.00</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">Out of Stoke</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="d-flex align-items-center">
              <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                  cart</button></div>
              <div className="cart-remove">
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                </Link>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="py-4">
            <div className="cart-info d-flex flex-wrap align-items-center ">
              <div className="col-lg-3">
                <div className="card-image">
                  <img src={item7} alt="cloth" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card-detail ps-3">
                  <h5 className="card-title">
                    <Link to="#" className="text-decoration-none">Yellow T-shirt</Link>
                  </h5>
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">$250.00</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="total-price">
              <span className="secondary-font fw-medium">In Stoke</span>
            </div>
          </td>
          <td className="py-4 align-middle">
            <div className="d-flex align-items-center">
              <div className="me-4"><button className="btn btn-dark p-3 text-uppercase fs-6 btn-rounded-none w-100">Add to
                  cart</button></div>
              <div className="cart-remove">
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                </Link>
              </div>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<Register />


<Service />

<Footer />


    </div>
  )
}
