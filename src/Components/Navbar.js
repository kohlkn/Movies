import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import firebase from 'firebase/compat/app';
import "firebase/auth";


  
const Navbar = () => {
let user = firebase.auth().currentUser;
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/MainPage" activestyle='true'>
            Home
          </NavLink>
          <NavLink to="/SignUp" activestyle='true'>
            Sign Up
          </NavLink>
          <NavLink to="/SignIn" activestyle='true'>
            Login
          </NavLink>
          <NavLink to="/Checkout" activestyle='true'>
            Checkout
          </NavLink>
          <NavLink to="/RegistrationConfirm" activestyle='true'>
            Registration Confirmation
          </NavLink>
          <NavLink to="/BookTickets" activestyle='true'>
            Book
          </NavLink>
          <NavLink to="/AdminView" activestyle='true'>
            Admin
            </NavLink>
          <NavLink to="/Profile" activestyle='true'>
            Profile
          </NavLink>
          <NavLink to="/EditPage" activestyle='true'>
            Edit profile
          </NavLink>
          <NavLink to='/Logout' activestyle='true'>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;