import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission (without actual email sending functionality)
  const handleSubscribe = (e) => {
    e.preventDefault();
    setMessage(`Thank you for subscribing with ${email}!`);
    setEmail(''); // Clear the input field
  };

  return (
    <div className="container-fluid bg-success bg-opacity-10 my-5">
      <div className=" p-2 rounded">
        <h2 className="text-center text-success ">Subscribe <span className='text-muted'>to Our Newsletter</span> </h2>
        <p className='text-center container col-md-10 text-muted lead'>sapiente! Veniam sunt in quibusdam nesciunt facere?</p>
        <form onSubmit={handleSubscribe} className="text-center  container text-center col-md-8 " >
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn-success" type="submit">
              Subscribe
            </button>
          </div>
          {message && <div className="alert alert-success mt-3">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
