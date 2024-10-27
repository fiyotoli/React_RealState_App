import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing location icon
import propertyList from '../../propertyList.js'; // Importing property list from JSON

const RecentProperties = () => {
  const [showMore, setShowMore] = useState(false); // State to control "Explore More" or "Explore Less"
  const propertiesToShow = showMore ? propertyList.length : 3; // Display 3 initially

  const toggleShowMore = () => setShowMore(!showMore); // Toggle function for expanding and collapsing

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">
        Recent <span className='text-muted'>Properties</span>
      </h2>
      <div className="row">
        {propertyList.slice(0, propertiesToShow).map((property, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={property.id}>
            <div className="card shadow h-100"> {/* Ensuring equal height */}
              <img
                src={property.image}
                alt={property.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }} // Image styling
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text flex-grow-1 d-flex align-items-center">
                  <span
                    className={`text-muted p-1 rounded ${
                      index % 3 === 0
                        ? 'bg-danger bg-opacity-10'
                        : index % 3 === 1
                        ? 'bg-warning bg-opacity-10'
                        : 'bg-primary bg-opacity-10'
                    }`}
                  >
                    <FaMapMarkerAlt className="text-success me-2" /> {/* Success color for icon */}
                    {property.location}
                  </span>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success">{property.price}</h6>
                  <Link to={`/property/${property.id}`} className="btn btn-success rounded-pill">
                    View Details
                  </Link> {/* Rounded button */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More / Explore Less button */}
      <div className="text-center mt-4">
        <button
          className="btn btn-success"
          onClick={toggleShowMore} // Toggle the state
        >
          {showMore ? 'Explore Less' : 'Explore More'}
        </button>
      </div>
    </div>
  );
};

export default RecentProperties;
