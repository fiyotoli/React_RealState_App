import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container my-5 pt-5">
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
              <span className="text-muted">123 Real Estate, Addis Ababa, Ethiopia</span>
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

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-success mb-2 fs-3 text-center">Our <span className='text-dark'>Location</span> </h4>
          <p className='text-center text-muted container col-10 mb-4'>Feel free to reach out to us for any inquiries or further information.</p>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.493372059764!2d38.75776047465639!3d9.024939391462233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85754562e72f%3A0x96db6abec9d6cd30!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1698273040678!5m2!1sen!2set"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Our Location on Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
