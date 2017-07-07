import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import React from "react";

export default class AppNavbar extends React.Component {
  render() {
    return(
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="/">React-Blog</a>
      </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      <NavItem eventKey={0} href="/blog">Blog</NavItem>
      <NavItem eventKey={1} href="/writepost">Write</NavItem>
      </Nav>
      </Navbar>
    );
  }
}
