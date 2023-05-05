import React from "react";
import { useStateValue } from "./StateProvider";
import './checkoutproduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{},dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove form Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
