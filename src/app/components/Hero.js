
"use client"
import React from "react";

function Hero() {
  return (
    <div>
      {/* <!--hero section start--> */}
      <section className="banner-area-wrap-v2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-content-hero-v2">
                <h5>Get Started With Ortencey</h5>
                <h1>
                  We Are The Best Digital <strong>Marketing</strong> Agency.
                </h1>
                <p>
                  The 3 golden rules professional Digital Marketing Agency don’t
                  want you to know about.
                </p>
                <div className="btn-groups">
                  <a href="#" className="btn btn-default">
                    Discover More
                  </a>
                  <a href="#" className="btn btn-get">
                    Get Started
                  </a>
                </div>
              </div>
              {/* <!--/.left-content-hero--> */}
            </div>
            <div className="col-lg-6">
              <div className="right-content-herov2">
                <div className="imgs">
                  <img src="img/home2/hero-img.png" data-aos="fade-up" alt="" />
                </div>
              </div>
              {/* <!--/.right-content-hero--> */}
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
        <span className="banner-frame-one"></span>
        <span className="banner-frame-two v2"></span>
        <span className="banner-frame-three"></span>
        <span className="banner-frame-four"></span>
      </section>
      {/* <!--hero section end--> */}
    </div>
  );
}

export default Hero;
