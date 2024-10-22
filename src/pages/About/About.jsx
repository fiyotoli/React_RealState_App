import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHandshake, FaHome, FaBuilding, FaBullseye, FaUserTie, FaCalendarAlt, FaGlobe, FaHeart } from 'react-icons/fa';
import buildingImage from '../../assets/real-estate-building.jpg'; // Adjust the path if needed

const About = () => {
  return (
    <section className="about mt-5 py-5">
      <div className="container">
        <h1 className="text-center text-success mb-4">About <span className="text-muted">Us</span></h1>
        
        <div className="row">
          {/* Company Image on the Left */}
          <div className="col-md-6 mb-4">
            <img src={buildingImage} alt="Real Estate Building" className="img-fluid rounded shadow" />
          </div>

          {/* About Section with Segmented Paragraphs on the Right */}
          <div className="col-md-6 mb-4">
            {/* Founder */}
            <div className="mb-3 d-flex align-items-center">
              <FaUserTie className="text-success me-2" size={24} />
              <h3 className="mb-0 lead fs-5">Founder: John Doe</h3>
            </div>
            <p className="text-muted">
              John Doe, with over 20 years of experience in the real estate industry, founded Real Estate World to revolutionize the property market with integrity and excellence.
            </p>

            {/* Year Established */}
            <div className="mb-3 d-flex align-items-center">
              <FaCalendarAlt className="text-success me-2" size={24} />
              <h3 className="mb-0 lead fs-5">Established: 2010</h3>
            </div>
            <p className="text-muted">
              Since 2010, we have been committed to offering a wide range of properties while maintaining the highest standards of service and professionalism.
            </p>

            {/* Professional Guidance */}
            <div className="mb-3 d-flex align-items-center">
              <FaHandshake className="text-success me-2" size={24} />
              <h3 className="mb-0 lead fs-5">Professional Guidance</h3>
            </div>
            <p className="text-muted">
              At Real Estate World, we pride ourselves on offering professional guidance tailored to each client's unique needs. 
              We believe in forming lasting relationships by providing trustworthy advice throughout your property journey.
            </p>

            {/* Diverse Property Listings */}
            <div className="mb-3 d-flex align-items-center">
              <FaHome className="text-success me-2" size={24} />
              <h3 className="mb-0 lead fs-5">Diverse Property Listings</h3>
            </div>
            <p className="text-muted">
              From luxurious homes to modern apartments and commercial properties, we have a wide range of listings to fit any budget or lifestyle.
              Let us help you find the perfect space that meets your personal or business needs.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row mt-5">
          {/* Card 1: Market Expertise */}
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow text-center p-3">
              <FaBuilding className="text-success mb-3" size={36} />
              <h4 className="mb-3 text-muted">Market Expertise</h4>
              <p className="text-muted">
                With years of experience, our team provides in-depth knowledge of the market, ensuring you make informed decisions.
              </p>
            </div>
          </div>

          {/* Card 2: Client-Focused Mission */}
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow bg-success text-center p-3 text-white">
              <FaBullseye className="mb-3" size={46} />
              <h4 className="mb-3">Client-Focused Mission</h4>
              <p>
                Our mission is simple: put our clients first, always. We work hard to make the real estate process smooth, stress-free, and successful.
              </p>
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow text-center text-muted p-3">
              <FaHeart className="text-success mb-3" size={36} />
              <h4 className="mb-3">Core Values</h4>
              <p className="text-muted">
                Integrity, transparency, and commitment are our core values. We aim to foster trust and build lasting relationships with all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
