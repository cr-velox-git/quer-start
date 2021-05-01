import React from "react";
import "../css/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="info_box">
        <div className="info">
          <ol>
            <h2>QUER</h2>
            <ol>Question</ol>
            <ol>Jobs</ol>
            <ol>Salary Calculator</ol>
            <ol>Help</ol>
            <ol>Mobile</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h2>TEAMS</h2>
            <ol>Talents</ol>
            <ol>Advetisining</ol>
            <ol>Enterprise</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h2>COMPANY</h2>
            <ol>About</ol>
            <ol>Press</ol>
            <ol>Legal</ol>
            <ol>Privacy Policy</ol>
            <ol>Cotact Us</ol>
            <ol>Cookie Setting</ol>
            <ol>Cookie Policy</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h2>SOCIAL NETWORK</h2>
            <ol>Blog</ol>
            <ol>Facebook</ol>
            <ol>Twitter</ol>
            <ol>Linkedin</ol>
            <ol>Instagram</ol>
          </ol>
        </div>
      </div>
      <div className="footer_bottom">This is footer bottom</div>
    </div>
  );
}

export default Footer;
