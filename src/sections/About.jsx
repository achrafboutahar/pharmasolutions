import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container py-5 px-4 px-lg-2">
        <div className="row">
          <div className="col py-4">
            <div
              className="text-lg-center wow fadeInUp mb-5"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">About us</h1>
              <h5 className="text-secondary">
                We help you to manage & push your business to the next level
              </h5>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="mb-4">
                  Pharma Solutions is using industry standard IT systems for its
                  business operations. The aim of Pharma Solutions IT
                  architecture is to develop and maintain an integrated business
                  information model of core systems to represent the business,
                  specifically designed for pharmaceutical distribution for
                  Principals. The current architecture has enabled us to bring
                  new services online, improve the user experience, explore new
                  ideas and respond to technological & service-oriented change.
                </p>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="text-muted">First Working Process</h5>
                    <p className="mb-0 text-muted">
                      Aliqu diam amet diam et eos labore. Clita erat ipsum et
                      lorem et sit, sed stet no labore lorem sit clita duo justo
                      magna
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
                      Aliqu diam amet diam et eos labore. Clita erat ipsum et
                      lorem et sit, sed stet no labore lorem sit clita duo justo
                      magna
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
  );
}

export default About;
