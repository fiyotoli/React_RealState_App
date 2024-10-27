import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const { Title, Text } = Typography;

const Contact = () => {
  return (
    <div className="container my-5 ">
      <Row gutter={[32, 32]} className="pt-5">
        {/* Form Section (Left) */}
        <Col xs={24} md={12}>
          <div className="p-5 bg-success bg-opacity-10" style={{ borderRadius: '8px' }}>
            <Form layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} placeholder="Enter your message or inquiry" />
              </Form.Item>
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  style={{ backgroundColor: '#198754', borderColor: '#198754' }} // Success color
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* Text Section (Right) */}
        <Col xs={24} md={12} className="d-flex flex-column justify-content-center">
          <Title level={2} style={{ color: '#198754' }}>Get in Touch</Title>
          <Text className="mb-4 text-muted">
            We are here to assist you with all your real estate needs. Whether you have questions about a property or need guidance on buying or selling, we are just a message away!
          </Text>

          <ul style={{ padding: 0, listStyle: 'none' }}>
            <li className="mb-3">
              <FaEnvelope className="text-success me-2" /> 
              <Text type="secondary">info@realestateworld.com</Text>
            </li>
            <li className="mb-3">
              <FaPhone className="text-success me-2" /> 
              <Text type="secondary">+251 123 456 789</Text>
            </li>
            <li className="mb-3">
              <FaMapMarkerAlt className="text-success me-2" /> 
              <Text type="secondary">123 Real Estate St, Addis Ababa, Ethiopia</Text>
            </li>
          </ul>

          <Title level={4} style={{ color: '#198754', marginTop: '24px' }}>Follow Us</Title>
          <div className="d-flex">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaFacebook size={24} />
            </div>
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaTwitter size={24} />
            </div>
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px' }}>
              <FaInstagram size={24} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
