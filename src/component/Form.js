import React, { useState } from "react";
import { Google_URL, Apple_URL, Facebook_URL } from "../utils/constants";
import { MdClear } from "react-icons/md";
import xicon from "../utils/xIcon.jpg";
import Apple from "../utils/Apple.png";
import Facebook from "../utils/Facebook.png";
import Google from "../utils/Google.png";
import Eye from "../utils/Eye.png";
import Eyeopen from "../utils/Eyeopen.png";
import { useSelector } from "react-redux";
const Form = () => {
  const lang = useSelector((store) => store.app.Lang);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleCutName = () => {
    setName("");
  };
  const handleCutPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" w-80  p-6 ml-24 ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4 relative">
          <input
            type="email"
            id="email"
            placeholder={lang ? "Enter Email" : "एमैल दाले"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="email"
            className="appearance-none border font-gilroy rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleCutName}
          >
            <img
              src={xicon}
              alt="My Image"
              className="w-[24px] h-[24px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="mb-2 relative">
          <input
            type="password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={lang ? "Enter Password" : "पासवर्ड दाले"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            className="appearance-none font-gilroy border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            {showPassword ? (
              <img
                src={Eye}
                alt="My Image"
                className="w-[24px] h-[24px] rounded-full object-cover"
                onClick={handleCutPassword}
              />
            ) : (
              <img
                src={Eyeopen}
                alt="My Image"
                className=" rounded-full object-cover"
                onClick={handleCutPassword}
              />
            )}
          </div>
        </div>
        <div className="mb-10 font-extralight text-slate-400 font-mono text-right">
          Recover password?
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
      <div className="flex justify-between items-center mt-4">
        <hr className="border-t border-gray-300 w-[25%]" />
        <div className="text-gray-500 text-sm">Or continue with:</div>
        <hr className="border-t border-gray-300 w-[25%]" />
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="w-20 h-10 bg-gray-300 hover:bg-white hover:shadow-sm flex justify-center items-center rounded-md cursor-pointer ">
          <img src={Google} alt=" Logo" className="w-6 h-6 " />
        </div>
        <div className="w-20 h-10 bg-slate-300 hover:bg-white hover:shadow-sm flex justify-center items-center rounded-md cursor-pointer">
          <img src={Apple} alt="Apple Logo" className="w-6 h-6" />
        </div>
        <div className="w-20 h-10 bg-gray-300 hover:bg-white hover:shadow-sm flex justify-center items-center rounded-md cursor-pointer">
          <img src={Facebook} alt="Facebook Logo" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Form;
