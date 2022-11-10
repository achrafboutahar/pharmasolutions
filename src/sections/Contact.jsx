import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container py-5 px-4 px-lg-2">
        <div className="row">
          <div className="col py-4">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-3">Get In Touch</h1>
                <p className="mb-4 text-dark">
                  Collaborate with our expert strategists, creative and digital
                  departments to bring your vision to life. Speak to our team
                  using the below details, or alternatively, complete the
                  contact form and we will get back to you shortly!
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
  );
}

export default Contact;
