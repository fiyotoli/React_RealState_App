import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaHome,FaUser, FaServicestack } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Import logo from assets folder

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [expanded, setExpanded] = useState(false); // Manage navbar collapse state
  const [activeSection, setActiveSection] = useState('home'); // Set default active section to home
  const navigate = useNavigate();

  const handleScroll = () => {
    setShadow(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Set the active section
    setExpanded(false); // Collapse navbar after clicking
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      bg="white" 
      variant="light" 
      className={`transition-shadow ${shadow ? 'shadow-lg' : 'shadow-none'}`} // Add shadow when scrolled
      expanded={expanded}
    >
      <Container className="d-flex justify-content-between align-items-center ">
        {/* Logo on the left */}
        <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />

        {/* Centered Nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Link 
              to="/" 
              className={`nav-link fs-5 d-flex align-items-center ${activeSection === 'home' ? 'text-success' : 'text-dark'}`}
              onClick={() => handleNavClick('home')}
              style={{ cursor: 'pointer' }}
            >
              <FaHome className="me-1" /> Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link d-flex fs-5 align-items-center ${activeSection === 'about' ? 'text-success' : 'text-dark'}`}
              onClick={() => handleNavClick('about')}
              style={{ cursor: 'pointer' }}
            >
             <FaUser className="me-1" /> About
            </Link>
            <Link 
              to="/property" 
              className={`nav-link fs-5  d-flex align-items-center ${activeSection === 'service' ? 'text-success' : 'text-dark'}`}
              onClick={() => handleNavClick('service')}
              style={{ cursor: 'pointer' }}
            >
              <FaServicestack className="me-1" /> Property
            </Link>
          </Nav>
          
          {/* Contact Me button on the right */}
          <Button className='fs-5 rounded-pill '
            variant="success " 
            onClick={() => {
              handleNavClick('contact');
              navigate('/contact'); // Navigate to contact page
            }}
          >
            Contact Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
