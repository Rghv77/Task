import React from "react";
import { IMG_URL } from "../utils/constants";
import Form from "./Form";
import { useSelector } from "react-redux";

const Main = () => {
  const dark = useSelector((store) => store.app.Dark);
  const textclr = dark ? " text-white" : " text-black";
  return (
    <>
      <div className="flex mt-28">
        <div>
          <div className="font-bold text-5xl ml-24">
            <div className="relative inline-block">
              {/* Ellipse background */}
              {dark && (
                <div className="absolute top-0 left-0 bg-gradient-to-tl from bg-circle2 blur-3xl rounded-full w-40 h-40"></div>
              )}
              {/* Your content */}
              <span className="relative z-10 text-blue-700 font-bold">
                <div className={textclr}>Sign In to</div>{" "}
                <div className={"mt-2" + textclr}> Recharge Direct</div>
              </span>
            </div>
          </div>
          <div className="ml-24 mt-14">
            <div className={"font-medium" + textclr}>
              if you don't have an account
            </div>

            <div className={"font-medium" + textclr}>
              you can{" "}
              <div className="relative inline-block">
                {/* Ellipse background */}
                {!dark && (
                  <div className="absolute top-0 left-0 bg-gradient-to-tl from bg-circle1 blur-3xl rounded-full w-40 h-40"></div>
                )}
                {/* Your content */}
                <span className="relative z-10 text-blue-700 font-bold">
                  Register here!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <img className=" w-96 h-72 ml-6" src={IMG_URL} alt="Image" />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Main;
