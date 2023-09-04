import React from "react";

function BlogHome() {
  return (
    <div>
      {/* <!--blog area start--> */}
      <section className="blog-sec v2 px-120">
        <div className="container">
          <div className="row g-0">
            <div className="col-12">
              <div className="sec-title v2 text-center">
                <h3>Our Blog</h3>
                <h2 className="tag1">Latest Blogs & Articles</h2>
              </div>
            </div>
            <div className="col-12 mt-50">
              <div className="row justify-content-center g-4 ">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="single-blog-inner v2"
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    <div className="imgs">
                      <img src="img/blog1.jpg" alt="" />
                      <span className="date">09 Dec 2022</span>
                      <span className="cat">Digital Agency</span>
                      <a href="blog-details.html" className="single-links">
                        hidden link
                      </a>
                    </div>
                    <div className="conts">
                      <ul className="meta">
                        <li>
                          <img src="img/icons/user.svg" alt="" />
                          <span>by Admin</span>
                        </li>
                        <li>
                          <img src="img/icons/messages.svg" alt="" />{" "}
                          <span>25</span>
                        </li>
                        <li>
                          <img src="img/icons/eye.svg" alt="" />{" "}
                          <span>120 Views</span>
                        </li>
                      </ul>
                      <h2>
                        <a href="blog-details.html">
                          Successful business partner have a meeting and
                          discussing
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* <!--/.single-blog-inner--> */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="single-blog-inner v2"
                    data-aos="fade-in"
                    data-aos-delay="300"
                  >
                    <div className="imgs">
                      <img src="img/blog2.jpg" alt="" />
                      <span className="date">09 Dec 2022</span>
                      <span className="cat">Marketing Agency</span>
                      <a href="blog-details.html" className="single-links">
                        hidden link
                      </a>
                    </div>
                    <div className="conts">
                      <ul className="meta">
                        <li>
                          <img src="img/icons/user.svg" alt="" />
                          <span>by Admin</span>
                        </li>
                        <li>
                          <img src="img/icons/messages.svg" alt="" />{" "}
                          <span>22</span>
                        </li>
                        <li>
                          <img src="img/icons/eye.svg" alt="" />{" "}
                          <span>2120 Views</span>
                        </li>
                      </ul>
                      <h2>
                        <a href="blog-details.html">
                          Motivated colleagues celebrating corporate success
                          together
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* <!--/.single-blog-inner--> */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="single-blog-inner v2"
                    data-aos="fade-in"
                    data-aos-delay="500"
                  >
                    <div className="imgs">
                      <img src="img/blog3.jpg" alt="" />
                      <span className="date">09 Nov 2022</span>
                      <span className="cat">Digital Connect</span>
                      <a href="blog-details.html" className="single-links">
                        hidden link
                      </a>
                    </div>
                    <div className="conts">
                      <ul className="meta">
                        <li>
                          <img src="img/icons/user.svg" alt="" />
                          <span>by Admin</span>
                        </li>
                        <li>
                          <img src="img/icons/messages.svg" alt="" />{" "}
                          <span>22</span>
                        </li>
                        <li>
                          <img src="img/icons/eye.svg" alt="" />{" "}
                          <span>120 Views</span>
                        </li>
                      </ul>
                      <h2>
                        <a href="blog-details.html">
                          Man using a tablet to a work and connect with others
                        </a>
                      </h2>
                    </div>
                  </div>
                  {/* <!--/.single-blog-inner--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--blog area end--> */}
    </div>
  );
}

export default BlogHome;
