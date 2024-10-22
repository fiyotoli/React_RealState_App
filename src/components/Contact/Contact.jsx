import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Form Section (Left) */}
        <div className="col-md-6 bg-success bg-opacity-10 p-5 rounded">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </form>
        </div>

        {/* Text Section (Right) */}
        <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5 mt-5 mt-md-0">
          <h2 className="text-success mb-3"> <span className='text-muted'>Get</span> in Touch</h2>
          <p className="mb-4 text-muted">
            Feel free to reach out to us for any inquiries or further information. We are always here to help you find your dream property or answer any questions you may have.
          </p>
          
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaEnvelope className="text-success me-2" /> 
              <span className="text-muted">info@realestateworld.com</span>
            </li>
            <li className="mb-3">
              <FaPhone className="text-success me-2" /> 
              <span className="text-muted">+123 456 7890</span>
            </li>
            <li className="mb-3">
              <FaMapMarkerAlt className="text-success me-2" /> 
              <span className="text-muted">123 Real Estate St., City, Country</span>
            </li>
          </ul>
          
          <h4 className="text-success mb-3 mt-4">Follow Us</h4>
          <div className="d-flex">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaFacebook size={24} />
            </div>
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaTwitter size={24} />
            </div>
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px' }}>
              <FaInstagram size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
