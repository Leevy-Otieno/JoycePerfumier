import React from 'react';
import logoImg from '../assest/JoycePerfumier.jpg'; // 1. Import the image file

const Logo = ({ w, h }) => {
  return (
    <img 
      src={logoImg} // 2. Pass the imported variable here
      alt="Company Logo" 
      width={w} 
      height={h} 
    />
  );
};

export default Logo;