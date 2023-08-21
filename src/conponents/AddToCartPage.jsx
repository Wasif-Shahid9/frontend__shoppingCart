import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "../conponents/AddToCart.css";

// const AddToCartPage = () => {
//   const { state } = useLocation();
//   // if(state.length < 1){

//   // }
//   const [number, setNumber] = useState(1);
//   console.log(state);
//   const handleDec = () => {
//     if (number <= 1) {
//       return 1;
//     } else {
//       setNumber(number - 1);
//     }
//   };
//   const handleInc = () => {
//     setNumber(number + 1);
//   };
//   return (
//     <div className="addtocart">
//       <h1>Add to Cart Page</h1>
//       <h4> {state.title}</h4>
//       <h4> {state.category}</h4>
//       <img src={state.image} alt="" />
//       <h4> {state.description}</h4>
//       <h4> {state.price}</h4>
//       <h4>Rating: {state.rating.rate}</h4>
//       <p>Count: {state.rating.count}</p>
//       <div className="item__incdec">
//         <button onClick={handleDec}>dec</button>
//         <p> {number} </p>
//         <button onClick={handleInc}> Inc</button>
//       </div>
//     </div>
//   );
// };

const AddToCartPage = ({ cart }) => {
  // console.log("Cart", cart);
  const [cartItems, setCartItems] = useState([...cart]);
  console.log(cartItems);

  const [totalPrice, setTotalPrice] = useState(0);
  const removedDecimal = Math.trunc(totalPrice);

  const handleDec = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity <= 1) {
      return;
    } else {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };

  const handleInc = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };
  React.useEffect(() => {
    let subtotal = 0;

    cart.forEach((item) => {
      subtotal = subtotal + item.price * item.quantity;
    });

    setTotalPrice(subtotal);
  }, [cartItems]);

  return (
    <>
      <div className="w-[500px] mx-auto">
        <p className="md:text-5xl sm:text-2xl  font-bold text-center m-5">
          Add to Cart Page
        </p>
        {cart.length > 0 ? (
          cart.map((item, index) => {
            console.log(index);
            return (
              <>
                <div
                  className="product__card   flex-wrap shadow-lg shadow-inherit-cyan-500/50 p-[20px] "
                  key={index}
                >
                  <h4> {item.title}</h4>
                  <h4> {item.category}</h4>
                  <img className="w-[200px]" src={item.image} alt="" />
                  <h4> Price: {item.price}</h4>

                  <div className="flex items-center border-l-pink-300">
                    <button onClick={() => handleDec(index)}>-</button>
                    <p className="mx-2">{item.quantity} </p>
                    <button onClick={() => handleInc(index)}>+</button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div className="">
              <h1 className="text-center md:text-4xl mb-5">
                There Are No items in the cart{" "}
              </h1>
              <div className="flex justify-center ">
                <Link to="/">
                  <button className="border p-2 ">Continue Shopping</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between w-[300px] mx-auto">
        <p>Subtototal</p>
        <p> {removedDecimal} </p>
      </div>
    </>
  );
};

export default AddToCartPage;
