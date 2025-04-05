import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {currentYear} Voting App - MERN Stack Project
        </p>
        <p className="mb-0 text-muted small">
          Built with MongoDB, Express, React, Node.js
        </p>
      </Container>
    </footer>
  );
};

export default Footer;