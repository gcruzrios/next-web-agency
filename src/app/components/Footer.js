import React from "react";

function Footer() {
  return (
    <div>
      {/* <!--footer area start--> */}
      <footer class="footers v2">
        <div class="container">
          <div class="row g-0">
            <div class="col-12">
              <div class="newsletter-form v2">
                <div class="d-md-flex align-items-center justify-content-between">
                  <div class="left-content">
                    <p>For Digital Marketing Agency</p>
                    <h2>Join Our Agency Community</h2>
                  </div>
                  <div class="right-content">
                    <form>
                      <div class="newslttr-grp">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          class="form-control"
                        />
                        <button type="submit" class="btn">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!--/.newsletter-form--> */}
            </div>
            <div class="col-12">
              <div class="footer-widgets-wrap v2">
                <div class="row g-4 gy-5">
                  <div class="col-sm-6 col-lg-3">
                    <div class="ftr-widget v2 about">
                      <h2>About Company</h2>
                      <p>
                        There are many variations of passages of Lore Ipsum
                        availab but the majority have suffereds alteration in
                        some form, by injected humour a randomised words which
                      </p>
                      <ul class="socials">
                        <li>
                          <a href="#">
                            <i class="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bx bxl-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bx bxl-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!--/.ftr-widget--> */}
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="ftr-widget v2">
                      <h2>Featured Services </h2>
                      <ul class="navs">
                        <li>
                          <a href="#">Social Media Marketing</a>
                        </li>
                        <li>
                          <a href="#">Pay Per Click Management</a>
                        </li>
                        <li>
                          <a href="#">Search Engine Optimization</a>
                        </li>
                        <li>
                          <a href="#">Free SEO Analysis</a>
                        </li>
                        <li>
                          <a href="#">Case Studies</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!--/.ftr-widget--> */}
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="ftr-widget v2">
                      <h2>Recent Post </h2>
                      <ul class="recent-posts">
                        <li class="d-flex align-items-center">
                          <div class="flex-grow-0">
                            <img src="img/blog1.jpg" alt="" />
                          </div>
                          <div class="flex-shrink-1">
                            <a href="blog-details.html">
                              Thoughtful man using laptop pondering{" "}
                            </a>
                            <p>
                              <i class="bx bx-calendar"></i> 09 Dec 2022
                            </p>
                          </div>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="flex-grow-0">
                            <img src="img/blog2.jpg" alt="" />
                          </div>
                          <div class="flex-shrink-1">
                            <a href="blog-details.html">
                              Thoughtful man using laptop pondering{" "}
                            </a>
                            <p>
                              <i class="bx bx-calendar"></i> 09 Dec 2022
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <!--/.ftr-widget--> */}
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="ftr-widget v2">
                      <h2>Contact Us</h2>
                      <ul class="contacts">
                        <li>
                          <i class="bx bxs-phone"></i>
                          <a href="tel:7501234">+(323) 750-1234</a>
                        </li>
                        <li>
                          <i class="bx bxs-envelope"></i>
                          <a href="mailto:infoyourortencey@email.com">
                            infoyourortencey@email.com
                          </a>
                        </li>
                        <li>
                          <i class="bx bxs-map"></i>
                          <address>
                            374 FA Tower, William S Blvd, Melbourne 2721, IL,
                            USA
                          </address>
                        </li>
                      </ul>
                    </div>
                    {/* <!--/.ftr-widget--> */}
                  </div>
                </div>
              </div>
              {/* <!--/.footer-widgets-wrap--> */}
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </footer>
      <div class="copyright-conts v2">
        <div class="container">
          <div class="row gy-3">
            <div class="col-md-6">
              <p>2022 © All rights reserved by devsnest-llc</p>
            </div>
            <div class="col-md-6">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--footer area end--> */}
    </div>
  );
}

export default Footer;
