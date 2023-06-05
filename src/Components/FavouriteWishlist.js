import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Formatprice from "../helpers/Formatprice";
import { styled } from "styled-components";
import { Button } from "./styles/Button";

const FavouriteWishlist = ({ curElement, color }) => {
  let wishlistData = JSON.parse(localStorage.getItem("WishlistProducts"));
  console.log("wishlistData", wishlistData);

  const RemoveItem = (id) => {
    let temp=wishlistData.filter((item) => (item.curElement.id !== id));

    localStorage.setItem("WishlistProducts", JSON.stringify(temp));
  };

  return (
    <>
      {wishlistData?.map((val, ind) => (
        <Wrapper className="section">
          <div className="container grid grid-three-column" key={ind}>
            <div className="card">
              <Link to={`/singleproduct/${val.curElement.id}`}>
                <figure>
                  <img src={val.curElement.image} alt={val.curElement.name} />
                  <figcaption className="caption">
                    {val.curElement.category}
                  </figcaption>
                </figure>
              </Link>
              <div className="card-data">
                <div className="card-data-flex">
                  <Link to={`/singleproduct/${val.curElement.id}`}>
                    <h3>{val.curElement.name}</h3>
                  </Link>

                  <Link to={`/singleproduct/${val.curElement.id}`}>
                    <p className="card-data--price">
                      {<Formatprice price={val.curElement.price} />}
                    </p>
                  </Link>
                </div>
                <Button onClick={() => RemoveItem(val.curElement.id)}>
                  Remove Item
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FavouriteWishlist;
