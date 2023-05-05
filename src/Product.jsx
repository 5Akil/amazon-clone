import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
 
    const [{}, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
          type: "ADD_TO_CART",
          item: {
            id: id,
            title: title,
            image :image,
            price: price,
            rating : rating,
          },
        });
      };
  return (
    
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price.toLocaleString("en-US")}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>🌟</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart} >Add to Cart</button>
    </div>
  );
}

export default Product;
