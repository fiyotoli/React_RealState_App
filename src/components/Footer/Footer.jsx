import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; // Import necessary icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-success bg-opacity-10 py-4">
      <div className="container">
        <div className="row text-left">
          {/* Column 1 */}
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-black text-decoration-none">About Us</Link></li>
              <li><Link to="/property" className="text-black text-decoration-none">Property List</Link></li>
              <li><Link to="/contact" className="text-black text-decoration-none">Contact Us</Link></li>
            </ul>
            <p className="mb-0">Follow us on our social media channels!</p>
            <div className="social-icons mt-2">
              <a href="https://facebook.com" className="text-black text-decoration-none me-2">
                <div style={{ 
                  borderRadius: '50%', 
                  backgroundColor: 'white', 
                  padding: '10px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <FaFacebook size={20} />
                </div>
              </a>
              <a href="https://twitter.com" className="text-black text-decoration-none me-2">
                <div style={{ 
                  borderRadius: '50%', 
                  backgroundColor: 'white', 
                  padding: '10px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <FaTwitter size={20} />
                </div>
              </a>
              <a href="https://instagram.com" className="text-black text-decoration-none">
                <div style={{ 
                  borderRadius: '50%', 
                  backgroundColor: 'white', 
                  padding: '10px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <FaInstagram size={20} />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>Property Listing</li>
              <li>Consultation</li>
              <li>Customer Support</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-0"><FaMapMarkerAlt className="me-2" />123 Real Estate St., City, State, ZIP</p>
            <p className="mb-0"><FaPhoneAlt className="me-2" /> (123) 456-7890</p>
            <p className="mb-0"><FaEnvelope className="me-2" /> info@realestateworld.com</p>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Additional Info</h5>
            <p className="mb-0">Get in touch with us for any inquiries or questions.</p>
          </div>
        </div>

        <hr className="my-4" />
        <p className="text-center mb-0 text-black">© {new Date().getFullYear()} Real Estate World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
