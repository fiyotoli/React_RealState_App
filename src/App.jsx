import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import { Spinner } from 'react-bootstrap'; // Importing Bootstrap Spinner
import { FaArrowAltCircleUp } from 'react-icons/fa'; // Importing Up Arrow Icon
import NotFound from './pages/NotFound/NotFound'; // Importing Not Found Page
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay (e.g., for data fetching)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Router>
            <div>
                <Header />
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        <Spinner animation="border" variant="success" />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/property" element={<PropertyList />} />
                        <Route path="/property/:id" element={<PropertyDetail />} />
                        <Route path="*" element={<NotFound />} /> {/* 404 Not Found Page */}
                    </Routes>
                )}
                <Footer />
                <button
                    onClick={scrollToTop}
                    className="btn btn-success "
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                       
                        right: '20px',
                        display: loading ? 'none' : 'block' // Hide when loading
                    }}
                >
                    <FaArrowAltCircleUp />
                </button>
            </div>
        </Router>
    );
};

export default App;
