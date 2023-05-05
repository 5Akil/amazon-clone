import React from "react";
import Header from "./Header";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          {cart.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is empty</h2>
              <p>
                You have no item in your basket. To buy one or more items ,
                click "Add to Cart" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Checkout Your Shopping Cart</h2>

              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className="checkout_right">
          <SubTotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
