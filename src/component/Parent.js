import React, { useState } from "react";

import "./parent.scss";
import Login from "./signin/Signin";
import Signup from "./signup/Signup";

export default function Parent() {
  const [currentTab, setCurrentTab] = useState("signup");

  const changeTab = (tabName) => {
    if (tabName === "login") {
      setCurrentTab("login");
    } else {
      setCurrentTab("signup");
    }
  };

  return (
    <>
      <div className="container">
        {/* <button onClick={() => changeTab("login")}>ورود </button>
        <button onClick={() => changeTab("signup")}>ثبت نام</button> */}

        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" checked onClick={() => changeTab("login")} />
          <label className="tab" htmlFor="radio-1">
          ورود
          </label>
          <input type="radio" id="radio-2" name="tabs" checked onClick={() => changeTab("signup")}/>
          <label className="tab" htmlFor="radio-2">
          ثبت نام
          </label>
          <span className="glider"></span>
        </div>

        {currentTab === "login" && <Login />}
        {currentTab === "signup" && <Signup />}
      </div>
    </>
  );
}
