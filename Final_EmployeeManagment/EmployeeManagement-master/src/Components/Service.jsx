import React from "react";
import { Link } from "react-router-dom";
import ServicesBox from "../Container/ServicesBox";
const Service = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Services</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/service" className="h5 text-white">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1>
          </div>
          <div className="row g-5">
            <ServicesBox
              title={"Website Development"}
              description={
                "Our Professional website developers are able to make any kind of website design and development as per client need."
              }
            />
            <ServicesBox
              title={"Mobile Applications"}
              description={
                "Through the expertise of our mobile developers, team Acecode is the perfect destination for your mobile Application."
              }
            />
            <ServicesBox
              title={"Software Development"}
              description={
                "Through the expertise of our mobile developers, team Acecode is the perfect destination for your mobile Application."
              }
            />
            <ServicesBox
              title={"Graphic Design"}
              description={
                "The Right Combination Of Colors, Shapes And Words Will Define Your Brand.Get The Perfect Design Ensure Your Branding Hits The Spot."
              }
            />
            <ServicesBox
              title={"Digital Marketing"}
              description={
                "We focus on driving impactful business growth through social media and enhance your brand's social media presence or drive targeted leads."
              }
            />

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                To Understand Who We Are Just Visit Web Development & Digital Marketing Company Let’s Improve Your Business With Quality Services Of Team Acecode
                </p>
                <h3 className="text-white mb-0">+91 63555 44531</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
