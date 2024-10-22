import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaHome, FaUserFriends } from 'react-icons/fa'; // Importing icons from react-icons
import aboutImage from '../../assets/about-image.jpg'; // Adjust the path according to your folder structure
import { motion } from 'framer-motion'; // Import motion from Framer Motion

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

          {/* Combined Motion for Subtitle and Paragraph */}
          <motion.div
            initial={{ x: 50, opacity: 0 }} // Start position and opacity
            whileInView={{ x: 0, opacity: 1 }} // End position and opacity when in view
            transition={{ duration: 0.6 }} // Animation duration
            viewport={{ once: false }} // This allows the animation to trigger every time the element enters the viewport
          >
            <p className="lead">
              We are dedicated to helping you find your dream property. Our team of experienced professionals is here to assist you every step of the way.
            </p>
          </motion.div>

          <div className="mt-4">
            {/* Individual Items with Sequential Animations */}
            <div className="d-flex align-items-center mb-3">
              <FaCheckCircle className="text-success me-2" size={24} />
              <div>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }} // Sequential delay for the heading
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  Expert Guidance
                </motion.span>
                <motion.p
                  className="text-muted"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }} // Sequential delay for the paragraph
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  Receive professional advice from our skilled agents.
                </motion.p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaHome className="text-success me-2" size={24} />
              <div>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }} // Sequential delay for the heading
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  Wide Property Selection
                </motion.span>
                <motion.p
                  className="text-muted"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }} // Sequential delay for the paragraph
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  Explore a diverse range of properties to suit your needs.
                </motion.p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaUserFriends className="text-success me-2" size={24} />
              <div>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.0 }} // Sequential delay for the heading
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  Customer-Centric Approach
                </motion.span>
                <motion.p
                  className="text-muted"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.0 }} // Sequential delay for the paragraph
                  viewport={{ once: false }} // Allow the animation to trigger every time the element enters the viewport
                >
                  We prioritize your needs and preferences at every step.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
