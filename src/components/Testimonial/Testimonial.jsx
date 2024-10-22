import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons

const testimonials = [
  {
    quote: "This company helped me find my dream house in no time!",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "Amazing service and very professional staff.",
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote: "Highly recommend to anyone looking to buy or rent property!",
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    quote: "Best experience I’ve had with a real estate company.",
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote: "They really listen to your needs and deliver great results.",
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null); // Ref for carousel control

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Testimonials</h2>
      <Carousel
        ref={carouselRef} // Assign the carousel ref
        indicators={false}
        controls={false} // Disable Bootstrap controls to use custom ones
        interval={5000}
      >
        {/* Carousel Items */}
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {testimonials.slice(index, index + 3).map((testimonialItem, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      {/* Quotation Icon */}
                      <FaQuoteLeft className="text-success display-5 mb-3" />
                      
                      {/* Testimonial Text */}
                      <p className="card-text mb-3">{testimonialItem.quote}</p>
                      
                      {/* Border Bottom */}
                      <hr className="border-success" />
                      
                      {/* Avatar and Name */}
                      <img
                        src={testimonialItem.avatar}
                        alt={testimonialItem.name}
                        className="rounded-circle mb-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <h5 className="card-title">{testimonialItem.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Circular Controls */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success rounded align-items-center justify-content-center shadow me-2"
          style={{ width: '50px', height: '50px' }}
          onClick={() => carouselRef.current.prev()} // Use carousel control prev
        >
          <FaArrowLeft className="text-white" /> {/* Left Arrow Icon */}
        </button>
        <button
          className="btn btn-success rounded align-items-center justify-content-center shadow"
          style={{ width: '50px', height: '50px' }}
          onClick={() => carouselRef.current.next()} // Use carousel control next
        >
          <FaArrowRight className="text-white" /> {/* Right Arrow Icon */}
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
