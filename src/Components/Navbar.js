import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./styles/Button";
import { AiOutlineHeart } from "react-icons/ai";
import HeartButton from "./HeartButton";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  let wishlistData = JSON.parse(localStorage.getItem("WishlistProducts"));
  console.log("wishlistDatalength", Object.keys(wishlistData).length);

  let wishlistlength = Object.keys(wishlistData).length;

  const Nav = styled.nav`
    .cart-total--item2 {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: 25%;
      left: 92.3%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .heart-wishlist {
      color: "black";
      font-size: 3.2rem;
      cursor: pointer;
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <Link
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </Link>
          </li>

          {isAuthenticated && (
            <li>
              <p> {user.name} </p>
            </li>
          )}

          {/* to toggle the login and logout button  */}
          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}
          <li>
            <Link
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/favouritewishlist">
              <AiOutlineHeart className="heart-wishlist" />
              <span className="cart-total--item2">{wishlistlength}</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </Link>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
