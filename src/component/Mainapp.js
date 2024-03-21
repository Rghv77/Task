import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
// import store from "./utils/store";
const Mainapp = () => {
  const dark = useSelector((store) => store.app.Dark);

  return (
    <div className={(dark ? "bg-bgDark" : "bg-blue-50") + " h-screen"}>
      <Navbar />
      <Main />
    </div>
  );
};

export default Mainapp;
