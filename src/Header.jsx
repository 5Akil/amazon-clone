import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{cart , user}]= useStateValue()
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* amazon logo  */}

      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* header search bar */}

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* header links  */}

      <div className="header_nave">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello,{ user?.email} </span>
            <span className="header_optionLinetwo">{user ? 'sighn Out' : 'Sighn In' }</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">return</span>
            <span className="header_optionLinetwo">& order</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne"> Your</span>
            <span className="header_optionLinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShopingBasketIcon/>
          <span className="header_optionLinetwo header_basketCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
