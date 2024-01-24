// ImageComponent.jsx
import React from "react";
import myImage from "./logo.png"; // Import the image file
import style from "./ImageLogin.module.css";

const ImageLogin = () => {
  return (
    <div className={style.logoContainer}>
      <img src={myImage} alt="logo" className={style.logoImg} />
    </div>
  );
};

export default ImageLogin;
