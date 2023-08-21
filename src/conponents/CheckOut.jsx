import React from "react";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="checkout__page">
      <h1>CheckOutPage</h1>
    </div>
  );
};

export default CheckOut;
