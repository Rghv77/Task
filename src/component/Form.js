import React from "react";
import { Google_URL, Apple_URL, Facebook_URL } from "../utils/constants";

const Form = () => {
  return (
    <div className=" w-80  p-6 ml-24 ">
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Enter Name"
            name="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            name="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
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
        <div className="w-20 h-10 bg-slate-300 flex justify-center items-center rounded-md ">
          <img src={Google_URL} alt=" Logo" className="w-6 h-6 " />
        </div>
        <div className="w-20 h-10 bg-slate-300 flex justify-center items-center rounded-md">
          <img src={Apple_URL} alt="Apple Logo" className="w-6 h-6" />
        </div>
        <div className="w-20 h-10 bg-slate-300 flex justify-center items-center rounded-md">
          <img src={Facebook_URL} alt="Facebook Logo" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Form;
