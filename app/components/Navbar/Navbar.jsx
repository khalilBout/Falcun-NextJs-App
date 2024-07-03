import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <div className="screenPadding flex h-[8vh] justify-between items-center">
      <Logo />
      <Links />
      <Icons />
    </div>
  );
};

export default Navbar;
