import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Formatprice from "../helpers/Formatprice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavouriteWishlist from "./FavouriteWishlist";
import { ToastContainer, toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const Product = (curElement) => {
  const { id, name, image, price, category } = curElement;
  const [color, setColor] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [wishlist, setWishList] = useState([]);

  const FavouriteWishlistHandler = (curElement) => {
    // const copy = JSON.parse(JSON.stringify(wishlist));
    // copy.push(curElement);
    const wishListData = localStorage.getItem("WishlistProducts");
    const wishlistItems = JSON.parse(wishListData);
    if (wishlistItems) {
      const data = [...wishlistItems, curElement];
      localStorage.setItem("WishlistProducts", JSON.stringify(data));
    } else {
      localStorage.setItem("WishlistProducts", JSON.stringify([curElement]));
    }
    setWishList((previous) => [...previous, curElement]);
    if (curElement.length !== 0) {
      setColor(!color);
    }
    if(!isAuthenticated){
      setColor(false)
      toast.error("Please Login!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

   

    if (!color && isAuthenticated) {
      toast.success("Item As Been Added to Wishlist !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // FavouriteWishlist({ curElement, color });

      // localStorage.setItem("WishlistProducts", JSON.stringify({ arr }));
    } 
  };

  console.log("wishlist", wishlist);

  return (
    <div className="card">
      <Link to={`/singleproduct/${id}`}>
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
      </Link>
      <div className="card-data">
        <div className="card-data-flex">
          <Link to={`/singleproduct/${id}`}>
            <h3>{name}</h3>
          </Link>

          {color === false ? (
            <AiOutlineHeart
              className="heart-wishlist"
              style={{ fontSize: "3.2rem", cursor: "pointer" }}
              onClick={() => FavouriteWishlistHandler({ curElement })}
            />
          ) : (
            <AiFillHeart
              style={{ fontSize: "3.2rem", cursor: "pointer" }}
              onClick={() => FavouriteWishlistHandler({ curElement })}
            />
          )}
          <ToastContainer />

          <Link to={`/singleproduct/${id}`}>
            <p className="card-data--price">{<Formatprice price={price} />}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
