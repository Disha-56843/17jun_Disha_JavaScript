import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom';
import bannerimage from '../Assests/images/banner-image.jpg'
import productitem1 from "../Assests/images/product-item1.jpg"
import productitem2 from "../Assests/images/product-item2.jpg"
import productitem3 from "../Assests/images/product-item3.jpg"
import productitem4 from "../Assests/images/product-item4.jpg"
import productitem5 from "../Assests/images/product-item5.jpg"
import productitem6 from "../Assests/images/product-item6.jpg"
import productitem7 from "../Assests/images/product-item7.jpg"
import productitem8 from "../Assests/images/product-item8.jpg"
import postitem1 from "../Assests/images/post-item1.jpg"
import postitem2 from "../Assests/images/post-item2.jpg"
import postitem3 from "../Assests/images/post-item3.jpg"
import categoryitem1 from "../Assests/images/category-item1.jpg"
import categoryitem2 from "../Assests/images/category-item2.jpg"
import categoryitem3 from "../Assests/images/category-item3.jpg"
import videoitem from "../Assests/images/video-item.jpg"
 


export default function Homepage1() {
    return (
        <div className="hompage bg-accent-light">

            <Header />

            <section id="billboard" className="padding-large no-padding-top position-relative">
                <div className="image-holder">
                    <img src={bannerimage} alt="banner" className="banner-image" />
                </div>
                <div className="banner-content content-light style1 text-center col-md-6">
                    <h2 className="banner-title">
                        Make your fashion look swanky.
                    </h2>
                    <div className="btn-center">
                        <Link to="#" className="btn btn-medium btn-light">Shop Now</Link>
                    </div>
                </div>
            </section>
            <section id="company-services">
                <div className="container my-5">
                    <div className="row">
                        <div className="icon-box-wrapper d-flex flex-wrap justify-content-between">
                            <div className="icon-box text-center col-md-3 col-sm-12">
                                <div className="content-box border-top border-bottom">
                                    <div className="icon-box-icon">
                                        <i className="icon icon-shipping"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="no-margin">Quick delivery</h3>
                                        <p>Inside City delivery within 5 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box text-center col-md-3 col-sm-12">
                                <div className="content-box border-top border-bottom">
                                    <div className="icon-box-icon">
                                        <i className="icon icon-store"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="no-margin">Pick up in store</h3>
                                        <p>We have option of pick up in store.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box text-center col-md-3 col-sm-12">
                                <div className="content-box border-top border-bottom">
                                    <div className="icon-box-icon">
                                        <i className="icon icon-package"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="no-margin">Special packaging</h3>
                                        <p>Our packaging is best for products.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fashion-trending" className="product-store padding-large position-relative overflow-hidden">
                <div className="container mb-5">
                    <div className="section-header text-center">
                        <h2 className="section-title">What's trending</h2>
                        <p>These are the products that are trending now.</p>
                    </div>
                    <div className="row">
                        <div className="swiper product-swiper">
                            <div className="swiper-wrapper row">
                                <div className="swiper-slide col-md-2">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem1} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Orange beanie</Link>
                                            </h3>
                                            <span className="item-price text-primary">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide col-md-2">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem2} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">leather coat</Link>
                                            </h3>
                                            <span className="item-price text-primary">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide col-md-2">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem3} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Oversize shirt</Link>
                                            </h3>
                                            <span className="item-price text-primary">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide col-md-2">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem4} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Flora print dress</Link>
                                            </h3>
                                            <span className="item-price text-primary">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide col-md-2">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem5} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Green outer</Link>
                                            </h3>
                                            <span className="item-price text-primary">$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button swiper-button-next"></div>
                        <div className="swiper-button swiper-button-prev"></div>
                        <div className="btn-center">
                            <Link to="shop.html" className="btn btn-medium btn-black">Shop All</Link>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </section>
            <section id="videos">
                <div className="video-item position-relative">
                    <div className="video-player">
                        <img src={videoitem} alt="video" className="video-image" />
                            <Link to="https://www.youtube.com/embed/rhcjYIPgpt8">
                                <i className="icon icon-play"></i>
                            </Link>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="position-relative padding-large">
                <div className="container mt-5">
                    <div className="row pt-5">
                        <div className="review-content">
                            <i className="icon-arrow icon-arrow-left"></i>
                            <div className="swiper testimonial-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide text-center d-flex justify-content-center">
                                        <div className="review-item col-md-8">
                                            <i className="icon icon-review"></i>
                                            <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi
                                                mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi sagittis
                                                loreus oncu enim cursus.”</blockquote>
                                            <div className="rating-star">
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star-line"></i>
                                            </div>
                                            <div className="author-detail">
                                                <div className="name text-primary">Emma Chamberlin</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide text-center d-flex justify-content-center">
                                        <div className="review-item col-md-8">
                                            <i className="icon icon-review"></i>
                                            <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi
                                                mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi sagittis
                                                loreus oncu enim cursus.”</blockquote>
                                            <div className="rating-star">
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star"></i>
                                                <i className="icon icon-star-line"></i>
                                            </div>
                                            <div className="author-detail">
                                                <div className="name text-primary">Joey Kimberland</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i className="icon-arrow icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </section>
            <section id="new-arrivals" className="product-store padding-large position-relative overflow-hidden">
                <div className="container mb-5">
                    <div className="section-header text-center">
                        <h2 className="section-title">New Arrivals</h2>
                        <p>These are the products that are new.</p>
                    </div>
                    <div className="row">
                        <div className="swiper product-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem5} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn 
                        d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Green Outer</Link>
                                            </h3>
                                            <span className="item-price text-primary">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem6} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn 
                        d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Dark Flower Onepiece</Link>
                                            </h3>
                                            <span className="item-price text-primary">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem7} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn 
                        d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Cloche Men</Link>
                                            </h3>
                                            <span className="item-price text-primary">$12.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem8} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn 
                        d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Rawcut Outer</Link>
                                            </h3>
                                            <span className="item-price text-primary">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-item position-relative">
                                        <div className="image-holder">
                                            <img src={productitem5} alt="product-item" className="product-image" />
                                        </div>
                                        <div className="cart-concern">
                                            <div className="cart-button d-flex flex-wrap">
                                                <div className="btn-left">
                                                    <Link to="#" className="btn btn-medium btn-light">Add to Cart</Link>
                                                </div>
                                                <button type="button" className="btn btn-light wishlist-btn">
                                                    <i className="icon icon-like"></i>
                                                </button>
                                                <button type="button" className="btn btn-light view-btn 
                        d-flex">
                                                    <i className="icon icon-crop"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-detail text-center">
                                            <h3 className="product-title">
                                                <Link to="#">Green outer</Link>
                                            </h3>
                                            <span className="item-price text-primary">$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button swiper-button-next"></div>
                        <div className="swiper-button swiper-button-prev"></div>
                        <div className="btn-center">
                            <Link to="#" className="btn btn-medium btn-black">Shop All</Link>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination1"></div>
            </section>
            <section id="categories" className="overflow-hidden">
                <div className="full-width-container d-flex flex-wrap">
                    <div className="category-item left-block col-md-6 col-sm-12 no-padding-left position-relative">
                        <div className="image-holder">
                            <img src={categoryitem1} alt="fashion" />
                        </div>
                        <div className="category-content content-light">
                            <h3 className="category-title">Summer Outfits</h3>
                            <div className="btn-left">
                                <Link to="#" className="btn btn-medium btn-light">Shop Collections</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-block col-md-6 col-sm-12 no-padding-right">
                        <div className="category-item top-block position-relative">
                            <div className="image-holder">
                                <img src={categoryitem2} alt="fashion" />
                            </div>
                            <div className="category-content content-light">
                                <h3 className="category-title">Guggles</h3>
                                <div className="btn-left">
                                    <Link to="#" className="btn btn-medium btn-outline-light">Shop it now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="category-item bottom-block position-relative">
                            <div className="image-holder">
                                <img src={categoryitem3} alt="fashion" />
                            </div>
                            <div className="category-content content-light">
                                <h3 className="category-title">Accessories</h3>
                                <div className="btn-left">
                                    <Link to="#" className="btn btn-medium btn-outline-light">Shop it now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="latest-blog" className="padding-large overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="section-title">Recent Blogs</h2>
                            <p>Read Our News & articles about updates</p>
                        </div>
                        <div className="row d-flex flex-wrap">
                            <article className="col-md-4 post-item">
                                <div className="image-holder">
                                    <Link to="single-post.html">
                                        <img src={postitem1} alt="post" className="post-image" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="post-header text-center">
                                        <h3 className="post-title">
                                            <Link to="single-post.html">Best Comfortable Clothes Ideas</Link>
                                        </h3>
                                        <p>Justo maecenas facilisi cursus fermentum enim vivirra.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-4 post-item">
                                <div className="image-holder">
                                    <Link to="single-post.html">
                                        <img src={postitem2} alt="post" className="post-image" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="post-header text-center">
                                        <h3 className="post-title">
                                            <Link to="single-post.html">Casual Denim Clothing for women</Link>
                                        </h3>
                                        <p>Justo maecenas facilisi cursus fermentum enim vivirra.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-4 post-item">
                                <div className="image-holder">
                                    <Link to="single-post.html">
                                        <img src={postitem3} alt="post" className="post-image" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="post-header text-center">
                                        <h3 className="post-title">
                                            <Link to="single-post.html">Best Poses for fashion photo</Link>
                                        </h3>
                                        <p>Justo maecenas facilisi cursus fermentum enim vivirra.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="btn-center">
                            <Link to="#" className="btn btn-medium btn-black">Read All</Link>
                        </div>
                    </div>
                </div>
            </section>
            

<Footer />

        </div>
    )
}
