import React from "react";

function Services() {
  return (
    <section className="bg-light" id="services">
      <div className="container py-5 px-4 px-lg-2">
        <div className="row">
          <div className="col py-4">
            <div
              className="text-lg-center wow fadeInUp mb-5"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Our Services</h1>
              <h5 className="text-secondary">
                We provide first-class, innovative services.
              </h5>
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
                    We provide consulting services to a vast client base across
                    the major business and industrial sectors.
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
                    PowerBI Integration, Odoo Integration, SAP Integration, CRM
                    Integration, iTop Integration...
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
                    We bring unique value through our experience in the security
                    field by delivering comprehensive security audit services.
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
                    We collaborate with you to create new value through digital
                    transformation{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
