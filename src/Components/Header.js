import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <Navbar/>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 5rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 10rem;
    width: 10rem;
  }
`;

export default Header;
