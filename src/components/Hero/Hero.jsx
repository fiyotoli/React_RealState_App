// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg'; // Import your image

const Hero = () => {
    return (
        <div className="container d-flex my-5 pt-5 align-items-center justify-content-center">
            <div className="row">
                {/* Left Section: Text */}
                <div className="col-md-6 mb-3 d-flex flex-column align-items-start justify-content-center">
                    <h1 className="display-4 fw-bold">
                        <span className="text-success">Find Your Dream Home</span> with Us
                    </h1>
                    <p className="lead">
                        Explore a wide range of properties tailored to your needs. From cozy apartments to luxury homes, let us help you find the perfect place.
                    </p>
                    <Link to="/listings" className="btn btn-success fs-5 p-2">
                        View Listings
                    </Link>
                </div>

                {/* Right Section: Image */}
                <div className="col-md-6 mb-3 d-flex align-items-center justify-content-center">
                    <img
                        src={heroImage}
                        alt="Beautiful home exterior"
                        className="img-fluid rounded" // Bootstrap class for responsive image and rounded corners
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
