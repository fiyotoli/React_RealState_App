import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaBuilding, FaUsersCog, FaRegHandshake } from 'react-icons/fa'; // Importing icons from react-icons
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-success text-center mb-4">Our <span className='text-muted'>Services</span></h2>
      <div className="row">
        {/* Card 1 - Slide In */}
        <div className="col-md-6 col-lg-4 mb-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Start position and opacity
            whileInView={{ y: 0, opacity: 1 }} // End position and opacity when in view
            transition={{ duration: 0.7 }} // Animation duration
            viewport={{ once: false }} // This allows the animation to trigger every time the element enters the viewport
            className="card shadow-sm"
          >
            <div className="card-body text-center">
              <FaBuilding className="text-success mb-3" size={40} /> {/* Icon above the title */}
              <h5 className="card-title text-success">Property Listing</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>Comprehensive property listings</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>Detailed descriptions and images</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>Advanced search filters</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Card 2 - Fade Out */}
        <div className="col-md-6 col-lg-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }} // Start with full opacity
            whileInView={{ opacity: 1 }} // Fade out when in view
            transition={{ duration: 0.7 }} // Animation duration
            viewport={{ once: false }} // This allows the animation to trigger every time the element enters the viewport
            className="card shadow h-100 border border-success"
          >
            <div className="card-body text-center">
              <FaUsersCog className="text-success mb-3" size={70} /> {/* Icon above the title */}
              <h5 className="card-title text-success">Consultation Services</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>Market analysis and insights</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>Property valuation services</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>Investment advice tailored to you</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Card 3 - Slide In */}
        <div className="col-md-6 col-lg-4 mb-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Start position and opacity
            whileInView={{ y: 0, opacity: 1 }} // End position and opacity when in view
            transition={{ duration: 0.7 }} // Animation duration
            viewport={{ once: false }} // This allows the animation to trigger every time the element enters the viewport
            className="card shadow-sm"
          >
            <div className="card-body text-center">
              <FaRegHandshake className="text-success mb-3" size={40} /> {/* Icon above the title */}
              <h5 className="card-title text-success">Customer Support</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>24/7 customer support</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>Assistance with inquiries</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span style={{ opacity: 0.6 }}>Post-sale support and guidance</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
