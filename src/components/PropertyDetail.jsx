import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import propertyList from '../propertyList.jsx';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing location icon

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertyList.find((prop) => prop.id === parseInt(id));

  // Scroll to the top when this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [id]); // Dependency on id ensures it runs on each property change

  if (!property) {
    return <h2>Property not found</h2>;
  }

  // Fetch related properties based on the category
  const relatedProperties = propertyList.filter(
    (prop) => prop.category === property.category && prop.id !== property.id
  );

  // Function to handle booking email
  const handleBooking = () => {
    const subject = `Booking Inquiry for ${property.title}`;
    const body = `I would like to book the property: ${property.title}`;
    const email = 'tasfayneshtolasa781@gmail.com';

    // Open Gmail in a new tab with the specified email
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="row  p-4">
        <div className="col-md-6">
          <img 
            src={property.image} 
            className="img-fluid" 
            alt={property.title} 
            style={{ height: '500px', width:"100%", objectFit: 'cover' }} 
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h1 className="font-weight-bold">{property.title}</h1>
            <p className="text-muted">{property.description}</p>
            <p>
              <strong>
                <span className="bg-success bg-opacity-10 p-2 rounded">{property.price}</span>
              </strong>
            </p>
            <p className="d-flex align-items-center">
              <span className="text-muted p-1 rounded bg-danger bg-opacity-10">
                <FaMapMarkerAlt className="text-success me-2" />
                {property.location}
              </span>
            </p>
            <Link to="/property" className="btn btn-outline-success me-2 my-2">Back to Property</Link>
            <button className="btn btn-success rounded-pill my-2" onClick={handleBooking}>Book Now</button>
         
          </div>
          <div className="mt-3">
            </div>
        </div>
      </div>
<div className='container'>
      <h4 className="my-4">Related Properties</h4>
      <div className="row">
        {relatedProperties.map((relatedProperty) => (
          <div className="col-md-6 col-lg-4 mb-4" key={relatedProperty.id}>
            <div className="card shadow h-100"> {/* Ensuring equal height */}
              <img 
                src={relatedProperty.image} 
                className="card-img-top" 
                alt={relatedProperty.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{relatedProperty.title}</h5>
                <p className="card-text flex-grow-1 d-flex align-items-center">
                  <span className="text-muted p-1 rounded bg-danger bg-opacity-10">
                    <FaMapMarkerAlt className="text-success me-2" /> {/* Success color for icon */}
                    {relatedProperty.location}
                  </span>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success">{relatedProperty.price}</h6>
                  <Link to={`/property/${relatedProperty.id}`} className="btn btn-success rounded-pill">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PropertyDetail;
