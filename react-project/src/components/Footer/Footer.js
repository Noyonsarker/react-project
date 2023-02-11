import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <img src={Logo} alt="" />
      <p>© 2023 Spotographer, All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
