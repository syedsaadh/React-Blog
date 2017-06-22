import React from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

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
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
      </Nav>
      </Navbar>
    );
  }
}
