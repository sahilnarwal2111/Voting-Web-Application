import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';

const MainNavbar = () => {
  const { isAuthenticated, currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const guestLinks = (
    <>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
    </>
  );

  const authLinks = (
    <>
      <Nav.Link as={Link} to="/polls">All Polls</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">My Dashboard</Nav.Link>
      {currentUser && currentUser.isAdmin && (
        <>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          <Nav.Link as={Link} to="/create-poll">Create Poll</Nav.Link>
        </>
      )}
      <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
    </>
  );

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Voting App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/polls">Polls</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;