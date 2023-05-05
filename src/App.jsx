import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


 

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const usubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      usubscribe();
    };
  }, []);
  console.log('user is>>>>',user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
