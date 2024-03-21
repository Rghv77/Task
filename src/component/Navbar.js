import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark, toggleLang } from "../utils/appSlice";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const lang = useSelector((store) => store.app.Lang);
  const dispatch = useDispatch();
  const dark = useSelector((store) => store.app.Dark);
  const textclr = dark ? " text-white" : " text-black";
  const handleDark = () => {
    dispatch(toggleDark());
  };
  const handleLang = (e) => {
    dispatch(toggleLang(e.target.value));
  };
  return (
    <div className={"flex justify-between h-24 "}>
      <ul className="flex justify-between items-center ml-20">
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          {lang ? "Home" : "होम"}
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          {lang ? "About" : "अबौत"}
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          {lang ? "Blog" : "ब्लोग"}
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          {lang ? "Pages" : "पृष्ठों"}
        </li>
        <li
          className={
            "p-5 font-medium cursor-pointer hover:to-blue-700" + textclr
          }
        >
          {lang ? "Contact" : "संपर्क"}
        </li>
      </ul>
      <ul className="flex justify-between items-center mr-20">
        <li className="p-5  font-medium ">
          <select
            className={"bg-transparent cursor-pointer " + textclr}
            onChange={handleLang}
          >
            <option className={dark ? "bg-bgDark" : "bg-bgLight"}>
              <button className={textclr}>English</button>
            </option>
            <option className={dark ? "bg-bgDark" : "bg-bgLight"}>
              <button className={textclr}>Hindi</button>
            </option>
          </select>
        </li>
        <li className="relative">
          <p className="p-5 font-medium text-blue-600 cursor-pointer">
            Sign In
          </p>
          <div className="absolute bottom-2 left-8 w-[30%] h-1 bg-blue-600"></div>
        </li>
        <li className="p-5">
          <button className="  font-medium text-blue-600 w-20 h-8 bg-white  shadow-lg rounded-l-full rounded-r-full">
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
