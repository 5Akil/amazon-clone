import React from "react";
import "./slideproduct.css";
import { useStateValue } from "./StateProvider";

function Slide_Product({ id, image, title, price }) {
  const [{}, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="card" >
      <img className="product_image" src={image} alt="product image" />
      <div className="product__info">
        <h2>{title}</h2>
        <p className="price">₹{price.toLocaleString("en-US")}</p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Slide_Product;
