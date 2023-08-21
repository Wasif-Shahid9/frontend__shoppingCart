import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Form = () => {
  const abc = useContext(ThemeContext);
  console.log(abc)
  return <div>{abc}</div>;
};

export default Form;
