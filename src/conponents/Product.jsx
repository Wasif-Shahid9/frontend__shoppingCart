import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import "./Products.css";

const Product = ({ setCart, cart }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className="product__main">
        {data.map((item) => (
          <div key={item.id} className="product__card realative ">
            <h4 className="text-xl font-bold">
              {item.title.trim().substring(0, 20)}...
            </h4>
            <div className="w-[200px]  h-[200px] m-auto my-5">
              <img
                className="w-[100%] h-[100%] object-contain"
                src={item.image}
                alt="error"
              />
            </div>

            <p className="font-semibold"> {item.category} </p>
            <button
              className="d-block m-auto w-[100%] mt-5  "
              onClick={() => navigate("./ProductDetail", { state: item })}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
      <button> </button>
    </>
  );
};

export default Product;
