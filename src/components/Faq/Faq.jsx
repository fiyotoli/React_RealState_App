import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import { FaQuestionCircle, FaPlus } from 'react-icons/fa'; // Importing the circular question mark and plus icons
import faqImage from '../../assets/faq.jpg'; 
import "./Faq.css"; // Adjust the path based on your project structure

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0"); // Set the default active key to open the first accordion item

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle active key
  };

  return (
    <Container fluid className="mt-5 pt-5">
      <Row className="align-items-center">
        {/* Left Section: Image */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <Image src={faqImage} alt="FAQ" fluid rounded />
        </Col>

        {/* Right Section: FAQ Accordion */}
        <Col lg={6} md={6} sm={12}>
          <h2 className="mb-4 fs-1 text-success font-weight-bolder">F<span className='text-dark'>A</span>Q</h2>
          <Accordion activeKey={activeKey} flush> {/* Added flush to remove borders */}
            {[
              {
                question: "How do I schedule a property viewing?",
                answer: "You can schedule a property viewing by contacting our office via phone or through our website's contact form.",
                eventKey: "0",
              },
              {
                question: "What documents do I need to provide for renting?",
                answer: "For renting, you typically need to provide identification, proof of income, and references. Specific requirements may vary.",
                eventKey: "1",
              },
              {
                question: "How long does the home buying process take?",
                answer: "The home buying process can take anywhere from a few weeks to several months, depending on financing, inspections, and negotiations.",
                eventKey: "2",
              },
              {
                question: "Are there any hidden fees when buying a house?",
                answer: "Yes, potential hidden fees may include closing costs, inspection fees, and property taxes. It’s important to budget for these in addition to the home price.",
                eventKey: "3",
              },
            ].map(({ question, answer, eventKey }) => (
              <Accordion.Item eventKey={eventKey} key={eventKey} style={{ border: 'none' }}> {/* Remove default border */}
                <Accordion.Header onClick={() => handleToggle(eventKey)} style={{ borderBottom: '1px solid #ddd' }}>
                  <FaQuestionCircle className="me-2 text-success" size={20} /> {/* Circular question mark icon in success color */}
                  <span className="flex-grow-1 text-start">{question}</span>
                  <FaPlus className="text-success" size={20} /> {/* Always show the plus icon */}
                </Accordion.Header>
                <Accordion.Body>
                  {answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
