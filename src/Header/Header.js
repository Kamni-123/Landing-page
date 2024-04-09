import React from "react";

import { RxCaretDown } from "react-icons/rx";


import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="header flex items-center justify-centre px-4 py-2 md:px-20 md:py-3">
      <img className="header-logo  w-48 cursor-pointer bg-transparent" alt="Logo" src="https://boords.com/_next/static/media/logotype.8db319ca.svg" />
     
     
     <div className="flex">
      <Link to="/solutions" className="flex  items-center justify-center p-5 ml-24">
        Solutions <RxCaretDown  />
      </Link>
      <Link to="/resources" className="flex items-center justify-center p-5">
        Resources <RxCaretDown  />
      </Link>
      <Link to="/features" className="flex items-center justify-center p-5">
        Features <RxCaretDown  />
      </Link>
      <Link to="/pricing" className="flex items-center justify-center p-5">
        Pricing <RxCaretDown  />
      </Link>
      </div>
      <div className="flex justify-between p-5 ml-96 font-semibold">
      <Link to="/login">Sign in</Link>
      </div>
      
    </nav>
  );
};

export default Header;
