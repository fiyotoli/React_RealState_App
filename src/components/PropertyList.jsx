import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';
import propertyList from '../propertyList.json'; // Importing property list from JSON

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [selectedCategory, setSelectedCategory] = useState(''); // State for category filter
  const [selectedLocation, setSelectedLocation] = useState(''); // State for location filter
  const [priceRange, setPriceRange] = useState([0, 2000000]); // State for price range filter

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle location filter
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Handle price range filter
  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  // Filtered property list
  const filteredProperties = propertyList.filter((property) => {
    const matchesTitle = property.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || property.category === selectedCategory;
    const matchesLocation = selectedLocation === '' || property.location === selectedLocation;
    const matchesPrice = property.price.replace(/[^\d]/g, '') >= priceRange[0] && property.price.replace(/[^\d]/g, '') <= priceRange[1];
    return matchesTitle && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center text-success display-5 mb-4">Property <span className='text-muted'>Listings</span> </h2>

      {/* Search Input with Icon */}
      <div className="input-group mb-3 shadow-sm 8 " >
        <span className="input-group-text bg-success text-white">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control "
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Filter Options */}
      <div className="row mb-4">
        {/* Category Filter */}
        <div className="col-md-6 col-lg-4 mb-3">
          <select className="form-select shadow-sm" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Apartment">Apartment</option>
            <option value="Cottage">Cottage</option>
            <option value="Condo">Condo</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="col-md-6 col-lg-4  mb-3">
          <select className="form-select shadow-sm" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
            <option value="Uptown">Uptown</option>
            <option value="Coastal Area">Coastal Area</option>
            <option value="City Center">City Center</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="col-md-6 col-lg-4 mb-3">
          <select className="form-select shadow-sm" onChange={handlePriceChange}>
            <option value="0-2000000">All Price Ranges</option>
            <option value="0-300000">$0 - $300,000</option>
            <option value="300000-500000">$300,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
          </select>
        </div>
      </div>

      {/* Property Cards */}
      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
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
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No properties match your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
