import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      {/* Left Side  */}
      <div>
        <div>
          <AiOutlineMenu size={30}/>
        </div>
        <div>
          <h1>Best <span>Eats</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
