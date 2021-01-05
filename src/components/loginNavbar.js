import React, { useState } from 'react';
import {coloring, size, elements, posts} from '../styles/navbar.css';
import { Link } from 'react-router-dom';
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

  const logout = (props) =>{
    localStorage.removeItem('token');
  }

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand className = 'coloring size' to="/">Hello, { props.user }</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="positioning mr-auto" navbar>
            <NavItem>
              <Link onClick = { logout } className = 'login' to="/login">Logout</Link>
            </NavItem>
            <NavItem>
              <Link className = 'register' to="/myposts">MyPosts</Link>
            </NavItem>
            <NavItem>
              <Link className = 'posts' to = "/posts">Posts</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarTop;
