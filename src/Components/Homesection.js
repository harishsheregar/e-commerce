import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "./styles/Button";
import Homepage from "../assets/images/home.png";

const Homesection = ({myData}) => {
    const {name}=myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-coloumn homeMain" >
          <div className="home-section-data">
            <p className="intro-data"> Welcome to </p>
            <h1>{name}</h1>
            <p>
              Ecommerce is a method of buying and selling goods and services
              online. The definition of ecommerce business can also include
              tactics like affiliate marketing. You can use ecommerce channels
              such as your own website, an established selling website like
              Amazon, or social media to drive online sales.
            </p>
            <Link>
              <Button>Shop Now</Button>
            </Link>
          </div>
          {/* homepage image */}
          <div className="home-section-image">
            <figure>
              <img src={Homepage} alt="home-section-photo" className="img-style"/>
            </figure>
          </div>
        </div> 
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .homeMain{
    display:flex;
  }
  .home-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .home-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Homesection;
