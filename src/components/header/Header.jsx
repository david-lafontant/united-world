/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import styles from './Header.module.css';

const Header = () => (
  <Container fluid>
    <Row className={`d-none d-lg-block ${styles.login_social}`}>
      <Col>
        <Nav className={`${styles.login_social_list}`}>
          <Nav.Link>Twitter</Nav.Link>
          <Nav.Link>Facebook</Nav.Link>
          <Nav.Link>English</Nav.Link>
          <Nav.Link>My Page</Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Col>
    </Row>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">U&nbsp;W&nbsp;S</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#program">Program</Nav.Link>
            <Nav.Link href="#sponsors">About</Nav.Link>
            <Nav.Link href="News">Program</Nav.Link>
            <Nav.Link href="#campaign">CC Campaign</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default Header;
