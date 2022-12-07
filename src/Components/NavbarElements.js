import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
//import "./Navbar.css";
  
export const Nav = styled.nav`
  background: #f10a0a;
  height: 85px;
  display: flex;
  overflow: visible;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  overflow: visible;
  cursor: pointer;
  &.active {
    color: #ffffff;
    overflow: visible;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  overflow: visible;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    overflow: visible;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  overflow: visible;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap;*/
  @media screen and (max-width: 768px) {
    display: none;
  }
`;