// ImageComponent.jsx
import React from "react";
import myImage from "./logo.png"; // Import the image file
import style from "./ImageComponent.module.css";

const ImageComponent = () => {
  return (
    <div className={style.logoContainer}>
      <img src={myImage} alt="logo" className={style.logoImg} />
      <div className={style.name}>
        <div className={style.headOne}>PICT</div>
        <div className={style.cont}>Committies</div>
      </div>
    </div>
  );
};

export default ImageComponent;
