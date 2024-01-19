import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <div>

<Header />

<section id="banner" className="py-3" style={{background: "#F9F3EC"}}>
  <div className="container">
    <div className="hero-content py-5 my-3">
      <h2 className="display-1 mt-3 mb-0">Checkout</h2>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item nav-link" to="#">Home</Link>
        <Link className="breadcrumb-item nav-link" to="#">Pages</Link>
        <span className="breadcrumb-item active" aria-current="page">Checkout</span>
      </nav>
    </div>
  </div>
</section>

<section className="shopify-cart checkout-wrap">
  <div className="container py-5 my-5">
    <form className="form-group">
      <div className="row d-flex flex-wrap">
        <div className="col-lg-6">
          <h2 className="text-dark pb-3">Billing Details</h2>
          <div className="billing-details">
            <label for="fname">First Name*</label>
            <input type="text" id="fname" name="firstname" className="form-control mt-2 mb-4 ps-3" />
            <label for="lname">Last Name*</label>
            <input type="text" id="lname" name="lastname" className="form-control mt-2 mb-4 ps-3" />
            <label for="cname">Company Name(optional)*</label>
            <input type="text" id="cname" name="companyname" className="form-control mt-2 mb-4" />
            <label for="cname">Country / Region*</label>
            <select className="form-select form-control mt-2 mb-4" aria-label="Default select example">
              <option selected="" hidden="">United States</option>
              <option value="1">UK</option>
              <option value="2">Australia</option>
              <option value="3">Canada</option>
            </select>
            <label for="address">Street Address*</label>
            <input type="text" id="adr" name="address" placeholder="House number and street name" className="form-control mt-3 ps-3 mb-3" />
            <input type="text" id="adr" name="address" placeholder="Appartments, suite, etc." className="form-control ps-3 mb-4" />
            <label for="city">Town / City *</label>
            <input type="text" id="city" name="city" className="form-control mt-3 ps-3 mb-4" />
            <label for="state">State *</label>
            <select className="form-select form-control mt-2 mb-4" aria-label="Default select example">
              <option selected="" hidden="">Florida</option>
              <option value="1">New York</option>
              <option value="2">Chicago</option>
              <option value="3">Texas</option>
              <option value="3">San Jose</option>
              <option value="3">Houston</option>
            </select>
            <label for="zip">Zip Code *</label>
            <input type="text" id="zip" name="zip" className="form-control mt-2 mb-4 ps-3" />
            <label for="email">Phone *</label>
            <input type="text" id="phone" name="phone" className="form-control mt-2 mb-4 ps-3" />
            <label for="email">Email address *</label>
            <input type="text" id="email" name="email" className="form-control mt-2 mb-4 ps-3" />
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="text-dark pb-3">Additional Information</h2>
          <div className="billing-details">
            <label for="fname">Order notes (optional)</label>
            <textarea className="form-control pt-3 pb-3 ps-3 mt-2" placeholder="Notes about your order. Like special notes for delivery."></textarea>
          </div>
          <div className="your-order mt-5">
            <h2 className="display-7 text-dark pb-3">Cart Totals</h2>
            <div className="total-price">
              <table cellspacing="0" className="table">
                <tbody>
                  <tr className="subtotal border-top border-bottom pt-2 pb-2 text-uppercase">
                    <th>Subtotal</th>
                    <td data-title="Subtotal">
                      <span className="price-amount amount ps-5">
                        
                          <span className="price-currency-symbol">$</span>1,500.00 
                      </span>
                    </td>
                  </tr>
                  <tr className="order-total border-bottom pt-2 pb-2 text-uppercase">
                    <th>Total</th>
                    <td data-title="Total">
                      <span className="price-amount amount ps-5">
                          <span className="price-currency-symbol">$</span>1,500.00 
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="list-group mt-5 mb-3">
                <label className="list-group-item d-flex gap-2 border-0">
                  <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios1" value="" checked="" />
                  <span>
                    <strong className="text-uppercase">Direct bank transfer</strong>
                    <small className="d-block text-body-secondary">Make your payment directly into our bank account.
                      Please use your Order ID. Your order will shipped after funds have cleared in our
                      account.</small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2 border-0">
                  <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                  <span>
                    <strong className="text-uppercase">Check payments</strong>
                    <small className="d-block text-body-secondary">Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.</small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2 border-0">
                  <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios3" value="" />
                  <span>
                    <strong className="text-uppercase">Cash on delivery</strong>
                    <small className="d-block text-body-secondary">Pay with cash upon delivery.</small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2 border-0">
                  <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios3" value="" />
                  <span>
                    <strong className="text-uppercase">Paypal</strong>
                    <small className="d-block text-body-secondary">Pay via PayPal; you can pay with your credit card if
                      you don't have a PayPal account.</small>
                  </span>
                </label>
              </div>
              <button type="submit" name="submit" className="btn btn-dark btn-lg rounded-1 w-100">Place an order</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

<Footer />

    </div>
  )
}
