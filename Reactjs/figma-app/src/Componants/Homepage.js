import React from 'react'
import { Link } from 'react-router-dom';
// import {img, button } from "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from 'mdb-react-ui-kit';
import user from "../Assets/user.png";
import categaries from "../Assets/category.png";
import categoriesmen from "../Assets/categaries(men).png";
import categorieswomen from "../Assets/categaries(women).png";
import categorieskids from "../Assets/categaries(kids).png";
import categorieswestern from "../Assets/categaries(western wear).png";
import forever21 from "../Assets/forever21.png";
import product1 from "../Assets/product1.png";
import product15 from "../Assets/product1.5.png";
import hnmlogo from "../Assets/H&M Logo undefined.png";
import product2 from "../Assets/product2.png";
import product3 from "../Assets/product3.png";
import product4 from "../Assets/product4.png";
import product5 from "../Assets/product5.png";
import product6 from "../Assets/product6.png";
import product7 from "../Assets/product7.png";
import product8 from "../Assets/product8.png";
import product9 from "../Assets/product9.png";
import product10 from "../Assets/product10.png";
import product11 from "../Assets/product11.png";
import product12 from "../Assets/product12.png";
import product13 from "../Assets/product13.png";
import product14 from "../Assets/product14.png";


// import product2 from "../Assets/product2.png";
import Footer from './Footer';

export default function Homepage() {
  return (
    <div className='mt-5'>
      <MDBContainer fluid>
        <div className='mx-auto'>
          <img src={user} className='img-fluid ms-2' alt='user' />
          <span className='ms-3 fw-bold'>Anna Doe</span>
          <i className='bi bi-search' style={{ float: "right" }} />
        </div>
        <div className='mx-auto' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='mt-5'>
            <img src={categaries} alt='' style={{ height: "62px", width: "62px" }} className='img-fluid ms-2' /><br />
            <span>Categories</span>
          </div>
          <div className='mt-5 ms-2'>
            <img src={categoriesmen} alt='' style={{ height: "62px", width: "62px" }} className='img-fluid' /><br />
            <span className='ms-3'>Men</span>
          </div>
          <div className='mt-5 ms-2'>
            <img src={categorieswomen} alt='' className='img-fluid' /><br />
            <span className='ms-3'>Women</span>
          </div>
          <div className='mt-5 ms-2'>
            <img src={categorieskids} alt='' style={{ height: "62px", width: "62px" }} className='img-fluid' /><br />
            <span className='ms-3'>Kids</span>
          </div>
          <div className='mt-5 ms-2'>
            <img src={categorieswestern} alt='' className='img-fluid' /><br />
            <span>Western</span>
          </div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={forever21} className=" w-100" alt="" id='img' />
              <div className="carousel-caption">
                <h1 id='h2' className=''>FOREVER 21</h1>
                <h4 id='h4'>Big Fashion Festival</h4>
                <h3 id='h3'>70%-80% Off</h3>
                <button id='btn'>Explore</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={forever21} className="d-block w-100" alt="" id='img' />
              <div className="carousel-caption">
                <h2 id='h2'>Second slide label</h2>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={forever21} className="d-block w-100" alt="" id='img' />
              <div className="carousel-caption">
                <h2 id='h2'>Third slide label</h2>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>

        </div>

        <div className='fw-bold fs-3 mt-4'>Trending Offers</div>
        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='p-2'>
            <img src={product1} className='' alt='' /><br />
            <img src={hnmlogo} className='' style={{ marginLeft: "40%" }} alt='' />

          </div>
          <div className='p-2'>
            <img src={product15} alt='' /><br />
            <img src={hnmlogo} style={{ marginLeft: "40%" }} alt='' />

          </div>

        </div>

        <div className='fw-bold fs-3 mt-4'>Deals Of The Day</div>
        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='p-2'>
            <img src={product2} className='' alt='' /><br />
            <div className='text-center'>Tops</div>
            <h3 className='text-center'>Under Rs. 799</h3>
          </div>
          <div className='p-2'>
            <img src={product3} alt='' /><br />
            <div className='text-center'>Tops</div>
            <h3 className='text-center'>Under Rs. 799</h3>
          </div>

        </div>
        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='p-2'>
            <img src={product4} className='' alt='' /><br />
            <div className='text-center'>Tops</div>
            <h3 className='text-center'>Under Rs. 799</h3>
          </div>
          <div className='p-2'>
            <img src={product5} alt='' /><br />
            <div className='text-center'>Tops</div>
            <h3 className='text-center'>Under Rs. 799</h3>
          </div>

        </div>


        <div className='fw-bold fs-3 mt-4'>Our Collection</div>
        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className=''>
              <img src={product6} className='' alt='' /><br />
            </div>
            <div className='ms-2' style={{ position: "relative" }}>
              <img src={product7} className='' alt='' /><br />
              <img src={product8} className='mt-2' alt='' /><br />
              <h1 className='text-white' style={{ position: "absolute", top: "68%", left: "38%" }}>+2</h1>

            </div>
          </div>
        </div>
        <h2 className='mt-3 ms-3'>Womens White Shirt</h2>
        <h3 className='mt-2 ms-3'>Brand Name</h3>
        <div style={{ display: "flex" }}>
          <strike className='mt-1 ms-3'>Rs. 999</strike>
          <h3 className='ms-3'>Rs. 799</h3>
          <span className='fs-5 fw-bold ms-2' style={{ color: "#0EB000" }}>(20% Off)</span>
        </div>
        <div style={{ display: "flex" }} className='mt-2'>
          <button id='wishlist' >Wishlist
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" className='ms-2 mt-1'>
              <path d="M4 16C1 12 2 6.00004 7 4.00004C12 2.00004 15 6.00004 16 8.00004C17 6.00004 21 2.00004 26 4.00004C31 6.00004 31 12 28 16C25 20 16 28 16 28C16 28 7 20 4 16Z" stroke="#848484" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>


          <button id='addtobag' className='ms-2 text-white ps-1 pe-1' >Add to Bag
            <i className='bi bi-bag ms-2' />
          </button>
        </div>




        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className=''>
              <img src={product9} className='' alt='' /><br />
            </div>
            <div className='ms-2' style={{ position: "relative" }}>
              <img src={product10} className='' alt='' /><br />
              <img src={product11} className='mt-2' alt='' /><br />
              <h1 className='text-white' style={{ position: "absolute", top: "68%", left: "38%" }}>+2</h1>

            </div>
          </div>
        </div>
        <h2 className='mt-3 ms-3'>Womens White Shirt</h2>
        <h3 className='mt-2 ms-3'>Brand Name</h3>
        <div style={{ display: "flex" }}>
          <strike className='mt-1 ms-3'>Rs. 999</strike>
          <h3 className='ms-3'>Rs. 799</h3>
          <span className='fs-5 fw-bold ms-2' style={{ color: "#0EB000" }}>(20% Off)</span>
        </div>
        <div style={{ display: "flex" }} className='mt-2'>
          <button id='wishlist' >Wishlist
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" className='ms-2 mt-1'>
              <path d="M4 16C1 12 2 6.00004 7 4.00004C12 2.00004 15 6.00004 16 8.00004C17 6.00004 21 2.00004 26 4.00004C31 6.00004 31 12 28 16C25 20 16 28 16 28C16 28 7 20 4 16Z" stroke="#848484" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>


          <button id='addtobag' className='ms-2 text-white ps-1 pe-1' >Add to Bag
            <i className='bi bi-bag ms-2' />
          </button>
        </div>




        <div className='mt-3' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className='' style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className=''>
              <img src={product12} className='' alt='' /><br />
            </div>
            <div className='ms-2' style={{ position: "relative" }}>
              <img src={product13} className='' alt='' /><br />
              <img src={product14} className='mt-2' alt='' /><br />
              <h1 className='text-white' style={{ position: "absolute", top: "68%", left: "38%" }}>+2</h1>

            </div>
          </div>
        </div>
        <h2 className='mt-3 ms-3'>Womens White Shirt</h2>
        <h3 className='mt-2 ms-3'>Brand Name</h3>
        <div style={{ display: "flex" }}>
          <strike className='mt-1 ms-3'>Rs. 999</strike>
          <h3 className='ms-3'>Rs. 799</h3>
          <span className='fs-5 fw-bold ms-2' style={{ color: "#0EB000" }}>(20% Off)</span>
        </div>
        <div style={{ display: "flex" }} className='mt-2'>
          <button id='wishlist' >Wishlist
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" className='ms-2 mt-1'>
              <path d="M4 16C1 12 2 6.00004 7 4.00004C12 2.00004 15 6.00004 16 8.00004C17 6.00004 21 2.00004 26 4.00004C31 6.00004 31 12 28 16C25 20 16 28 16 28C16 28 7 20 4 16Z" stroke="#848484" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button id='addtobag' className='ms-2 text-white ps-1 pe-1' >Add to Bag
            <i className='bi bi-bag ms-2' />
          </button>
        </div>

        <Footer />
      </MDBContainer >
    </div >
  )
}
