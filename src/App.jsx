import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-white p-0">
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

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
                    We’re an IT company based in Morocco to provide better
                    Pharma Solutions
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

        <section id="about">
          <div className="container py-5 px-4 px-lg-2">
            <div className="row">
              <div className="col py-4">
                <div
                  className="text-lg-center wow fadeInUp mb-5"
                  data-wow-delay="0.1s"
                >
                  <h1 className="mb-3">About us</h1>
                  <h4 className="text-secondary">
                    We help you to manage & push your business to the next level
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-4">
                      Pharma Solutions is using industry standard IT systems for
                      its business operations. The aim of Pharma Solutions IT
                      architecture is to develop and maintain an integrated
                      business information model of core systems to represent
                      the business, specifically designed for pharmaceutical
                      distribution for Principals. The current architecture has
                      enabled us to bring new services online, improve the user
                      experience, explore new ideas and respond to technological
                      & service-oriented change.
                    </p>
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="ms-4">
                        <h5 className="text-muted">First Working Process</h5>
                        <p className="mb-0 text-muted">
                          Aliqu diam amet diam et eos labore. Clita erat ipsum
                          et lorem et sit, sed stet no labore lorem sit clita
                          duo justo magna
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="ms-4">
                        <h5 className="text-muted">24/7 Hours Support</h5>
                        <p className="mb-0 text-muted">
                          Aliqu diam amet diam et eos labore. Clita erat ipsum
                          et lorem et sit, sed stet no labore lorem sit clita
                          duo justo magna
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <img
                      className="img-fluid wow zoomIn"
                      data-wow-delay="0.5s"
                      src="img/business.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light" id="services">
          <div className="container py-5 px-4 px-lg-2">
            <div className="row">
              <div className="col py-4">
                <div
                  className="text-lg-center wow fadeInUp mb-5"
                  data-wow-delay="0.1s"
                >
                  <h1 className="mb-3">Our Services</h1>
                  <h4 className="text-secondary">
                    We provide first-class, innovative services.
                  </h4>
                </div>
                <div className="row g-4">
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-edit fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Consulting</h5>
                      <p className="m-0">
                        We provide consulting services to a vast client base
                        across the major business and industrial sectors.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-sync fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Integration</h5>
                      <p className="m-0">
                        PowerBI Integration, Odoo Integration, SAP Integration,
                        CRM Integration, iTop Integration...
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-shield-alt fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Security Audit</h5>
                      <p className="m-0">
                        We bring unique value through our experience in the
                        security field by delivering comprehensive security
                        audit services.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fas fa-chalkboard-teacher fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Training</h5>
                      <p className="m-0">
                        We organize Good Manufacturing Practice (GMP) in-house
                        training courses and GMP webinars
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-laptop fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">On-demand solutions</h5>
                      <p className="m-0">
                        We are committed to create solutions that matches your
                        demand (Mobile App, Website, Platform, Software)
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-draw-polygon fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Data Scraping</h5>
                      <p className="m-0">
                        We offer full advanced web scraping, crawling and data
                        extraction services.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-cogs fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Consumable APIs</h5>
                      <p className="m-0">
                        We offer a set of ready-to-use APIs made for the
                        pharmaceutical industry.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="advanced-feature-item text-center rounded py-5 px-4">
                      <i className="fa fa-project-diagram fa-3x text-primary mb-4"></i>
                      <h5 className="mb-3">Digitalisation and IA</h5>
                      <p className="m-0">
                        We collaborate with you to create new value through
                        digital transformation{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions">
          <div className="container py-5 px-4 px-lg-2">
            <div className="row">
              <div className="col py-4">
                <div
                  className="text-lg-center wow fadeInUp mb-5"
                  data-wow-delay="0.1s"
                >
                  <h1 className="mb-3">Our Solutions</h1>
                  <h5 className="text-dark">
                    Use our solutions to drive your company's success.
                  </h5>
                </div>
                <div className="row py-5 align-items-center">
                  <div
                    className="col-lg-6 mb-5 mb-lg-0 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      className="img-fluid rounded shadow-lg"
                      src="img/pharmadocs.png"
                    />
                  </div>
                  <div
                    className="col-lg-6 ps-lg-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="d-flex align-items-center mb-4">
                      <h3 className="mb-0 text-primary">
                        <i className="fa fa-file-signature"></i>
                      </h3>
                      <span
                        className="bg-primary mx-2"
                        style={{ width: 30, height: 2 }}
                      ></span>
                      <h5 className="mb-0">PharmaDocs Platform</h5>
                    </div>
                    <p className="mb-4 text-muted">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit, sed stet
                      no labore lorem sit clita duo justo eirmod magna dolore
                      erat amet
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Pay as you go
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      User friendly interfaces
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Effective & powerfull
                    </p>
                  </div>
                </div>
                <div className="row py-5 align-items-center flex-column-reverse flex-lg-row">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center mb-4">
                      <h3 className="mb-0 text-primary">
                        <i className="fa fa-file-invoice"></i>
                      </h3>
                      <span
                        className="bg-primary mx-2"
                        style={{ width: 30, height: 2 }}
                      ></span>
                      <h5 className="mb-0">Expense & Travel Management</h5>
                    </div>
                    <p className="mb-4 text-muted">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit, sed stet
                      no labore lorem sit clita duo justo eirmod magna dolore
                      erat amet
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Fully responsive
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      User friendly interface
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Effective & powerfull
                    </p>
                  </div>
                  <div
                    className="col-lg-6 mb-5 mb-lg-0 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      className="img-fluid rounded shadow-lg"
                      src="img/expense.jpg"
                    />
                  </div>
                </div>
                <div className="row py-5 align-items-center">
                  <div
                    className="col-lg-6 mb-5 mb-lg-0 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      className="img-fluid rounded shadow-lg"
                      src="img/crm.png"
                    />
                  </div>
                  <div
                    className="col-lg-6 ps-lg-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="d-flex align-items-center mb-4">
                      <h3 className="mb-0 text-primary">
                        <i className="fa fa-chart-line"></i>
                      </h3>
                      <span
                        className="bg-primary mx-2"
                        style={{ width: 30, height: 2 }}
                      ></span>
                      <h5 className="mb-0">Sales Management System</h5>
                    </div>
                    <p className="mb-4 text-muted">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit, sed stet
                      no labore lorem sit clita duo justo eirmod magna dolore
                      erat amet
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Fully customizable
                    </p>
                    <p>
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      User friendly interface
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Effective & powerfull
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6" id="apis">
          <div className="container">
            <div
              className="mx-auto text-center wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3">Our APIs</h1>
              <p className="mb-5 text-muted">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit clita duo justo
              </p>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="price-item rounded overflow-hidden">
                  <div className="bg-dark p-4">
                    <h4 className="text-white text-center mt-2">
                      Documents APIs
                    </h4>
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span>PDFs Pagination</span>
                      <i className="fa fa-file-pdf pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>PDFs Optimization</span>
                      <i className="fa fa-file-archive pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>PDFs Conversion</span>
                      <i className="fa fa-sync-alt pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Products codification</span>
                      <i className="fa fa-file-code pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Digital Signature</span>
                      <i className="fa fa-file-contract pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>QR code generator</span>
                      <i className="fa fa-qrcode pt-1"></i>
                    </div>
                    <div className="text-center mt-4">
                      <button className="btn btn-dark rounded-pill">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="price-item rounded overflow-hidden">
                  <div className="bg-primary p-4">
                    <h4 className="text-white text-center mt-2">
                      E&T Management
                    </h4>
                    {/* <div className="text-white">
                      <span className="align-top fs-4 fw-bold">$</span>
                      <h1 className="d-inline display-6 text-dark mb-0">
                        {" "}
                        49.99
                      </h1>
                      <span className="align-baseline">/ Month</span>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span>HTML5 & CSS3</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Bootstrap v5</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Responsive Layout</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Cross-browser Support</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Remove Author's Credit</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>PHP & Ajax Contact Form</span>
                      <i className="fa fa-times text-danger pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>6 Months Free Support</span>
                      <i className="fa fa-times text-danger pt-1"></i>
                    </div>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-2 px-4 mt-3"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="price-item rounded overflow-hidden">
                  <div className="bg-dark p-4">
                    <h4 className="text-white text-center mt-2">CRM</h4>
                    {/* <div className="text-white">
                      <span className="align-top fs-4 fw-bold">$</span>
                      <h1 className="d-inline display-6 text-primary mb-0">
                        {" "}
                        79.99
                      </h1>
                      <span className="align-baseline">/ Month</span>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <span>HTML5 & CSS3</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Bootstrap v5</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Responsive Layout</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Cross-browser Support</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Remove Author's Credit</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>PHP & Ajax Contact Form</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>6 Months Free Support</span>
                      <i className="fa fa-check text-success pt-1"></i>
                    </div>
                    <a
                      href=""
                      className="btn btn-dark rounded-pill py-2 px-4 mt-3"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light">
          <div className="container py-5 px-4 px-lg-2">
            <div className="row">
              <div className="col py-4">
                <div className="row g-4 g-lg-5">
                  <div
                    className="col-lg-6 mb-5 mb-lg-0 pe-lg-3 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img className="img-fluid" src="img/process.png" />
                  </div>
                  <div
                    className="col-lg-6 ps-lg-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h3 className="mb-4">
                      Three simple steps to start working with
                    </h3>
                    <p className="mb-4 text-muted">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit, sed stet
                      no labore lorem sit clita duo justo eirmod magna dolore
                      erat amet
                    </p>
                    <ul className="process mb-0">
                      <li>
                        <span>
                          <i className="fa fa-glasses"></i>
                        </span>
                        <div>
                          <h5>Request a Demo</h5>
                          <p className="text-muted">
                            Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit. Aliqu diam amet diam et eos erat ipsum et
                            lorem et sit
                          </p>
                        </div>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-key"></i>
                        </span>
                        <div>
                          <h5>Purchase a License</h5>
                          <p className="text-muted">
                            Diam dolor diam ipsum sit. Aliqu diam amet diam et
                            eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo
                          </p>
                        </div>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-check"></i>
                        </span>
                        <div>
                          <h5>Enjoy the Features</h5>
                          <p className="text-muted">
                            Aliqu diam amet diam et eos. Clita erat ipsum et
                            lorem et sit, sed stet lorem sit clita duo justo
                            magna
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container py-5 px-4 px-lg-2">
            <div className="row">
              <div className="col py-4">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-3">Get In Touch</h1>
                    <p className="mb-4 text-dark">
                      Collaborate with our expert strategists, creative and
                      digital departments to bring your vision to life. Speak to
                      our team using the below details, or alternatively,
                      complete the contact form and we will get back to you
                      shortly!
                    </p>
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                        <i className="fa fa-phone-alt"></i>
                      </div>
                      <div className="ms-3">
                        <p className="mb-2">Call us</p>
                        <h5 className="mb-0">+212 663 664864</h5>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="ms-3">
                        <p className="mb-2">Mail us</p>
                        <h5 className="mb-0">contact@pharmasolutions.ma</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Your work Email"
                            />
                            <label htmlFor="email">Your work Email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                            />
                            <label htmlFor="subject">Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: 150 }}
                            ></textarea>
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary rounded-pill py-3 px-5"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
