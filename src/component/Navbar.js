import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../utils/appSlice";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch();
  const dark = useSelector((store) => store.app.Dark);
  const textclr = dark ? " text-white" : " text-black";
  const handleDark = () => {
    dispatch(toggleDark());
  };
  return (
    <div className={"flex justify-between h-24 "}>
      <ul className="flex justify-between items-center ml-20">
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          Home
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          About
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          Blog
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          Pages
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          Contact
        </li>
      </ul>
      <ul className="flex justify-between items-center mr-20">
        <li className="p-5  font-medium ">
          <select className={"bg-transparent cursor-pointer" + textclr}>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </li>
        <li className="relative">
          <p className="p-5 font-medium text-blue-600 cursor-pointer">
            Sign In
          </p>
          <div className="absolute bottom-2 left-8 w-[30%] h-1 bg-blue-600"></div>
        </li>
        <li className="p-5">
          <button className="  font-medium text-blue-600 w-20 h-8 bg-white shadow-lg rounded-l-full rounded-r-full">
            Register
          </button>
        </li>
        <li className="p-5">
          <button onClick={handleDark}>
            {dark ? (
              <MdLightMode style={{ color: "white", fontSize: "24px" }} />
            ) : (
              <MdDarkMode style={{ color: "black", fontSize: "24px" }} />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
