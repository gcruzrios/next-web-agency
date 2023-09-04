import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div>
      {/* <!-- main nav start --> */}
      <header className="header-style-2">
        <div className="top_nav_soc v2">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xl-8">
                <div className="left-content-top">
                  <ul>
                    <li>Welcome to Ortencey Digital Market Agency</li>
                  </ul>
                </div>
                {/* <!--/.left-content-top--> */}
              </div>
              <div className="col-md-4 col-xl-4">
                <div className="right-content-top">
                  <ul>
                    <li>
                      <div
                        id="options"
                        data-input-name="country2"
                        data-selected-country="US"
                      ></div>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--/.right-content-top--> */}
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-infor">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo2.png" alt="image" />
                  </a>
                </div>
                {/* <!--/.logo--> */}
              </div>
              <div className="col-9">
                <ul className="header-info-list">
                  <li>
                    <span className="icon">
                      <i className="bx bxs-phone"></i>
                    </span>
                    <h6>Phone Number</h6>
                    <a href="tel::55486548">+88 ( 5548 ) 6548</a>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="bx bxs-envelope"></i>
                    </span>
                    <h6>Email</h6>
                    <a href="mailto:infoyour@email.com">infoyour@email.com</a>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="bx bxs-time"></i>
                    </span>
                    <h6>Weekend Hours</h6>
                    <a href="#">Weekend Sat & Sunday</a>
                  </li>
                </ul>
                {/* <!--/.header-info-list--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--/.navbar-infor--> */}
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo.png" alt="image" />
                  </a>
                </div>
                {/* <!--/.logo--> */}
              </div>
            </div>
          </div>
          <div className="main-navbar  v2">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand d-none" href="index.html">
                  <img src="img/logo.png" alt="image" />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      {/* <Link className="nav-link active" href="/">
                        Home
                      </Link> */}
                      <a href="#" className="nav-link active"> Home <i className='bx bx-chevron-down'></i>
                                    </a>
                      <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link ">Home Demo - 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-2.html" className="nav-link active">Home Demo - 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-3.html" className="nav-link">Home Demo - 3</a>
                                    </li>
                                    </ul>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" href="/about">
                        About us
                      </Link> */}
                      <a href="about.html" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" href="/servicios">
                        Our Services
                      </Link> */}
                      <a href="#" className="nav-link "> Services <i className='bx bx-chevron-down'></i>
                                    </a>
                      <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="service.html" className="nav-link ">Service Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link ">Service Details</a>
                                        </li>
                                    </ul>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" href="/pages">
                        Pages
                      </Link> */}
                      <a href="#" className="nav-link "> Pages <i className='bx bx-chevron-down'></i>
                                    </a>
                      <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="team.html" className="nav-link ">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="team-details.html" className="nav-link ">Team Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="portfolio.html" className="nav-link ">Portfolio</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="portfolio-details.html" className="nav-link ">Portfolio Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pricing.html" className="nav-link ">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonial.html" className="nav-link ">Testimonial</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link ">Faq</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="404.html" className="nav-link ">404</a>
                                        </li>
                                    </ul>
                    </li>
                    <li className="nav-item">
                                    <a href="#" className="nav-link "> Shop <i className='bx bx-chevron-down'></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="shop.html" className="nav-link ">Shop</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="shop-details.html" className="nav-link ">Shop Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="cart.html" className="nav-link ">Cart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="checkout.html" className="nav-link ">Checkout</a>
                                        </li>
                                    </ul>
                                </li>
                    <li className="nav-item">
                                    <a href="#" className="nav-link "> News <i className='bx bx-chevron-down'></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog-full.html" className="nav-link ">Blog Full</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-right.html" className="nav-link ">Blog Right</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-left.html" className="nav-link ">Blog Left</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link ">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" href="/contact">
                        Contact us
                      </Link> */}
                      {/* <a href="contact.html" className="nav-link">Contact</a> */}
                    </li>
                  </ul>
                  {/* <!--/.navbar-nav --> */}
                  <div className="others-options d-flex align-items-center ms-auto">
                    {/* <div className="option-item">
                                    <a className="opt" href="#search"><i className="bx bx-search"></i></a>
                                </div> */}
                    <div className="option-item">
                      <a
                        className="opt"
                        href="#ortencySlideCartCanvas"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#ortencySlideCartCanvas"
                        aria-controls="ortencySlideCartCanvas"
                      >
                        <i className="bx bx-shopping-bag"></i>
                        <span className="badge">3</span>
                      </a>
                    </div>
                    <div className="option-item d-none d-xl-inline-block">
                      {/* <Link className="nav-link active" href="/quote">
                        Free Quote
                      </Link> */}
                      <a href="contact.html" className="btn">Free Quote <i className='bx bx-right-arrow-alt' ></i></a>
                    </div>
                  </div>

                  {/* <!--/.others-options--> */}
                </div>
              </nav>
              {/* <!--/.navbar--> */}
            </div>
          </div>
        </div>
      </header>
      {/* <!-- /.navbar --> */}
    </div>
  );
}

export default Nav;
