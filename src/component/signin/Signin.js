import React, { useState } from "react";

import PasswordBox from "../passwordBox/PasswordBox";
import "./signin.scss";
export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <h2>خوش آمديد</h2>
      <form className="form-signin" onSubmit={handleSubmit}>
      <input
          type="text"
          name="email"
          placeholder="پست الكترونيك "
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <PasswordBox 
          passwordName="password"
          passwordValue={inputs.password || ""}
          changeHandler={handleChange}
        />
        <a href="#">فراموش كرديد؟</a>
        <input className="form-btn" type="button" value="ورود" />
      </form>
    </>
  );
}
