import React from "react";

function Footer() {
  return (
    <section
      className="bg-dark text-body footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <p className="section-title text-white h5 mb-4">
              Address<span></span>
            </p>

            <p>
              <i className="fa fa-phone-alt me-3"></i>+212 663 664864
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>
              contact@pharmasolutions.ma
            </p>
            <div className="d-flex pt-2 gap-3">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <p className="section-title text-white h5 mb-4">
              Quick Link<span></span>
            </p>
            <a className="btn btn-link" href="">
              About
            </a>
            <a className="btn btn-link" href="">
              Contact
            </a>
            <a className="btn btn-link" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="">
              Terms & Conditions
            </a>
            <a className="btn btn-link" href="">
              Support
            </a>
          </div>

          <div className="col-auto col-lg-4">
            <p className="section-title text-white h5 mb-4">
              Newsletter<span></span>
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: 48 }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                PharmaSolutions.ma
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
