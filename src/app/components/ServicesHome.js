import React from "react";

function ServicesHome() {
  return (
    <div>
       <section className="two-section-for-bg">
        {/* <!--our services area start--> */}
        <div className="ortency-services-sec-v2 pt-120">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="single-services-ort-v2" data-aos="fade-in" data-aos-delay="100">
                            <div className="icon">
                                <img src="img/icons/service-icon1.svg" alt=""/>
                            </div>
                            <div className="cont">
                                <h2>Graphics Design</h2>
                                <p>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                            </div>
                        </div>
                        {/* <!--/.single-services-ort-v2--> */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-services-ort-v2" data-aos="fade-in" data-aos-delay="300">
                            <div className="icon">
                                <img src="img/icons/service-icon2.svg" alt=""/>
                            </div>
                            <div className="cont">
                                <h2>Web Developer</h2>
                                <p>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                            </div>
                        </div>
                        {/* <!--/.single-services-ort-v2--> */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-services-ort-v2" data-aos="fade-in" data-aos-delay="500">
                            <div className="icon">
                                <img src="img/icons/service-icon3.svg" alt=""/>
                            </div>
                            <div className="cont">
                                <h2>Digital Marketing</h2>
                                <p>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                            </div>
                        </div>
                        {/* <!--/.single-services-ort-v2--> */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="single-services-ort-v2" data-aos="fade-in" data-aos-delay="700">
                            <div className="icon">
                                <img src="img/icons/service-icon4.svg" alt=""/>
                            </div>
                            <div className="cont">
                                <h2>App Design</h2>
                                <p>There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.</p>
                            </div>
                        </div>
                        {/* <!--/.single-services-ort-v2--> */}
                    </div>
                </div>
            </div>
            {/* <!--/.container--> */}
        </div>
        {/* <!--our services area end--> */}
    
        {/* <!--about ortency start--> */}
        <div className="about-ortency-v1 px-120">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-md-6">
                        <div className="left-images-about-v2">
                            <div className="inner">
                                <img src="img/home2/about-img.png" data-aos="fade-down" className="img1" alt=""/>
                            </div>
                        </div>
                        {/* <!--/.left-images-about--> */}
                    </div>
                    <div className="col-md-6">
                        <div className="right-content-about v2">
                            <div className="sec-title  v2">
                                <h3>About Our Company</h3>
                                <h2 className="tag1">Learn How to Grow your Business in Days</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have as suffered alteration in some form, by injected humour, or randomised words which don't a look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                            <ul className="list-icons v2 d-flex flex-column align-items-start">
                                <li>01. Best market Research Policy.</li>
                                <li>02. 24/7 Days super Support.</li>
                            </ul>
                            <a href="#" className="btn btn-default">Read More</a>
                        </div>
                        {/* <!--/.right-content-about--> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!--about ortency end--> */}
    </section>
    </div>
  );
}

export default ServicesHome;
