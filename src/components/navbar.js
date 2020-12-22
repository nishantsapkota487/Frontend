import React, { useState } from 'react';
import {coloring, size, elements} from '../styles/navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const NavbarTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className = 'coloring size' href="/">Blog App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="positioning mr-auto" navbar>
            <NavItem>
              <NavLink className = 'login' href="/components/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'register' href="https://github.com/reactstrap/reactstrap">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
