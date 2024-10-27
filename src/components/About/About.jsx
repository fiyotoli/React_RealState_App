import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaHome, FaUserFriends } from 'react-icons/fa'; // Importing icons from react-icons
import aboutImage from '../../assets/about-image.jpg'; // Adjust the path according to your folder structure

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section: Image */}
        <div className="col-md-6 mb-4">
          <img
            src={aboutImage} // Using the imported image
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Section: Text */}
        <div className="col-md-6">
          <h2 className="text-success">
            About <span className='text-muted'>Us</span>
          </h2>

          {/* Removed Motion for Subtitle and Paragraph */}
          <div>
            <p className="lead">
              We are dedicated to helping you find your dream property. Our team of experienced professionals is here to assist you every step of the way.
            </p>
          </div>

          <div className="mt-4">
            {/* Individual Items without Animations */}
            <div className="d-flex align-items-center mb-3">
              <FaCheckCircle className="text-success me-2" size={24} />
              <div>
                <span>Expert Guidance</span>
                <p className="text-muted">
                  Receive professional advice from our skilled agents.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaHome className="text-success me-2" size={24} />
              <div>
                <span>Wide Property Selection</span>
                <p className="text-muted">
                  Explore a diverse range of properties to suit your needs.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaUserFriends className="text-success me-2" size={24} />
              <div>
                <span>Customer-Centric Approach</span>
                <p className="text-muted">
                  We prioritize your needs and preferences at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
