import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ cart, setCart }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // const handelAddtoCart = () => {
  //   // setAddToCart(addToCart + 1);
  //   const productExists = cart.find((item) => item.id === state.id);

  //   if (productExists) {
  //     const updatedCart = cart.map((item) => {
  //       if (item.id === state.id) {
  //         return { ...item, quantity: item.quantity + 1 };
  //       }
  //       return item;
  //     });

  //     setCart(updatedCart);
  //   } else {
  //     const updatedState = { ...state, quantity: 1 };
  //     setCart([...cart, updatedState]);
  //   }
  //   alert("Add to Cart Successfully");
  // };

  const handelAddtoCart = () => {
    // setAddToCart(addToCart + 1);
    const productExists = cart.find((item) => item.id === state.id);

    if (productExists) {
      alert("Item Alreay Exist in the cart");
    } else {
      const updatedState = { ...state, quantity: 1 };
      setCart([...cart, updatedState]);
      alert("Add to Cart Successfully");
    }
  };
  const handleCheckOut = () => {};
  return (
    <>
      {/* <button onClick={() => navigate("/AddToCartPage", { state: state })}>
        Cart Count {addToCart}
      </button> */}
      <div className="border-solid	border-2  w-[50%] mx-auto px-10 shadow-lg shadow-indigo-500/40 mt-5">
        <h4 className="text-3xl text-center"> {state.title}</h4>
        <h4> {state.category}</h4>
        <img className="w-[150px] mx-auto" src={state.image} alt="" />
        <h4> {state.description}</h4>
        <h4> {state.price}</h4>
        <h4>Rating: {state.rating.rate}</h4>
        <p>Count: {state.rating.count}</p>
        <div></div>
        <button className="mr-5" onClick={handelAddtoCart}>
          Add to Cart
        </button>
        <button onClick={() => navigate("/CheckOut", { state: state })}>
          Quick Buy
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
