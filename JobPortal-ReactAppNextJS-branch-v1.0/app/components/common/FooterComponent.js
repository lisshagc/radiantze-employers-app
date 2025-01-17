import React from "react";

const FooterComponent = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                <div className="widget">
                  <div className="logo-white">
                    <img
                      className="logo m-b15"
                      src="/images/seekers.png"
                      width="180"
                      alt=""
                    />
                  </div>
                  <p className="text-capitalize m-b20">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has been the industry's standard dummy
                    text ever since the.
                  </p>
                  <div className="subscribe-form m-b20">
                    <form
                      className="dzSubscribe"
                      action="script/mailchamp.php"
                      method="post"
                    >
                      <div className="dzSubscribeMsg"></div>
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required="required"
                          className="form-control"
                          placeholder="Your Email Address"
                          type="email"
                        />
                        <span className="input-group-btn">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="site-button radius-xl"
                          >
                            Subscribe
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <ul className="list-inline m-a0">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/"
                        className="site-button white facebook circle "
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/"
                        className="site-button white google-plus circle "
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/"
                        className="site-button white linkedin circle "
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="site-button white instagram circle "
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/"
                        className="site-button white twitter circle "
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
                <div className="widget border-0">
                  <h5 className="m-b30 text-white">
                    Frequently Asked Questions
                  </h5>
                  <ul className="list-2 list-line">
                    <li>
                      <a href="javascript:void(0);">Privacy & Seurty</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Terms of Serice</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Communications</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Referral Terms</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Lending Licnses</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Support</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">How It Works</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">For Employers</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Underwriting</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Contact Us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Lending Licnses</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
                <div className="widget border-0">
                  <h5 className="m-b30 text-white">Find Jobs</h5>
                  <ul className="list-2 w10 list-line">
                    <li>
                      <a href="javascript:void(0);">US Jobs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Canada Jobs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">UK Jobs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Emplois en Fnce</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Jobs in Deuts</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Vacatures China</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <span>
                  {" "}
                  © Copyright 2023 By{" "}
                  <a href="https://www.radiantze.com" target="_blank">
                    Radiantze Inc
                  </a>{" - "}
                  All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <button className="scroltop fa fa-arrow-up"></button>
    </>
  );
};

export default FooterComponent;
