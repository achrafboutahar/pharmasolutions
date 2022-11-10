import React from "react";

function Home() {
  return (
    <div className="position-relative" id="home">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <div className="d-flex">
            <img
              src="img/logo_light.png"
              alt="Logo"
              width="50"
              height="48"
              className="me-3 d-block d-lg-none"
              id="logo_light"
            />
            <img
              src="img/logo_dark.png"
              alt="Logo"
              width="50"
              height="48"
              className="me-3 d-none d-lg-block"
              id="logo_dark"
            />

            <div>
              <h4 className="m-0">Pharma</h4>
              <h5 className="m-0">Solutions</h5>
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler rounded-pill"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#services" className="nav-item nav-link">
              Services
            </a>
            <a href="#solutions" className="nav-item nav-link">
              Solutions
            </a>
            <a href="#apis" className="nav-item nav-link">
              APIs
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a
            href="#login"
            className="d-block d-lg-none text-primary text-uppercase my-3"
          >
            <i className="fa fa-arrow-right me-1"></i>
            Login
          </a>

          <a
            href="#signup"
            className="d-block d-lg-none text-primary text-uppercase"
          >
            <i className="fa fa-pen me-1"></i>
            Sign up
          </a>

          <a href="#login" className="text-white d-none d-lg-block">
            <i className="fa fa-arrow-right me-1"></i>
            Login
          </a>
          <button className="btn btn-light py-2 px-lg-4 ms-lg-3 d-none d-lg-block">
            Sign up
          </button>
        </div>
      </nav>

      <div className="bg-primary hero-header d-flex align-items-center">
        <div className="container px-4 px-lg-2">
          <div className="row align-items-center">
            <div className="col-lg-7 text-lg-start">
              <h1 className="text-white mb-4 animated slideInDown">
                Reliabale solutions for pharmaceutical industy.
              </h1>
              <p className="text-white pb-3 animated slideInDown">
                We’re an IT company based in Morocco to provide better Pharma
                Solutions
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your work Email"
                  style={{ height: 58 }}
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-3 shadow-none position-absolute top-0 end-0 m-2"
                >
                  Request a demo
                </button>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0 text-center">
              <img
                className="img-fluid w-100 animated zoomIn"
                src="img/converted.png"
                alt="Header"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
