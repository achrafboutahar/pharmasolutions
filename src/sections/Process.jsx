import React from "react";

function Process() {
  return (
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
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit, sed stet no
                  labore lorem sit clita duo justo eirmod magna dolore erat amet
                </p>
                <ul className="process mb-0">
                  <li>
                    <span>
                      <i className="fa fa-glasses"></i>
                    </span>
                    <div>
                      <h5>Request a Demo</h5>
                      <p className="text-muted">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos erat ipsum et lorem et
                        sit
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
                        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit
                        clita duo
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
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo magna
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
  );
}

export default Process;
