import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./PasswordBox.scss";

export default function PasswordBox({
  passwordName,
  passwordValue,
  changeHandler,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="password-box">
      <input
        type={show ? "text" : "password"}
        name={passwordName}
        placeholder="کلمه عبور*"
        value={passwordValue}
        onChange={changeHandler}
      />
      <span className="password-box__show-icon">
        {!show ? (
          <BsFillEyeFill className="show-icon" onClick={() => setShow(true)} />
        ) : (
          <BsFillEyeSlashFill  className="show-icon" onClick={() => setShow(false)} />
        )}
      </span>
    </div>
  );
}
