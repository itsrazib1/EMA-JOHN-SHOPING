import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const hansleAddToCart = props.hansleAddToCart;

  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" />
        <h6>{name}</h6>
        <h5>Price: ${price} </h5>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button
        onClick={() => hansleAddToCart(props.product)}
        className="cart-btn"
      >Add to Cart<FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
