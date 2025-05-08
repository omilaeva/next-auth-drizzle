import React from 'react';
import {SignIn} from "@/components/auth/signin-button";

function Navbar() {

  return (
    <nav>
      <ul className="nav-ul">
        <li className="nav-ul-li"><a className="nav-ul-li-a" href="#features">Features</a></li>
        <li className="nav-ul-li"><a className="nav-ul-li-a" href="#how-it-works">How It Works</a></li>
        <li className="nav-ul-li"><a className="nav-ul-li-a" href="#testimonials">Testimonials</a></li>
        <li className="nav-ul-li"><a className="nav-ul-li-a" href="#pricing">Pricing</a></li>
        <li className="nav-ul-li"><SignIn /></li>
      </ul>
    </nav>
  );
}

export default Navbar;