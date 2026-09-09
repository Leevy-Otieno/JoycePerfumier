import React from "react";
import logoImg from "../assest/JoycePerfumier.jpg";

const Logo = ({ w, h }) => {
  return <img src={logoImg} alt="Company Logo" width={w} height={h} />;
};

export default Logo;
