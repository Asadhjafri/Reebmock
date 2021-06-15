import React from "react";
import "./FooterStyle.css"

function Footer(){
    return <div>
          <footer>
          <div>
            <h1 className="footerSlogan">Impossible is nothing</h1>
          </div>
    <div className="container-fluid">
      <i className="social fab fa-twitter"></i>
      <i className="social fab fa-facebook-f"></i>
      <i className="social fab fa-instagram"></i>
      <i className="social fas fa-envelope"></i>
      <p>© 2021 Kudosz Inc.</p>
    </div>
  </footer>
    </div>
}

export default Footer;