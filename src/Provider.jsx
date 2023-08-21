import React from "react";
import { ThemeContext } from "./context";

const Provider = ({ children }) => {
  const value = "hello"; // Provide the value you want to share

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default Provider;
