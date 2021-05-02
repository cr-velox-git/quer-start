import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="info_box">
        <div className="info">
          <ol>
            <h4>QUER</h4>
            <ol>Question</ol>
            <ol>Jobs</ol>
            <ol>Help</ol>
            <ol>Mobile</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h4>TEAMS</h4>
            <ol>Talents</ol>
            <ol>Advetisining</ol>
            <ol>Enterprise</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h4>COMPANY</h4>
            <Link to="/about">
              <ol>About</ol>
            </Link>
            <ol>Legal</ol>
            <ol>Privacy Policy</ol>
            <ol>Cotact Us</ol>
          </ol>
        </div>
        <div className="info">
          <ol>
            <h4>SOCIAL NETWORK</h4>
            <ol>Blog</ol>
            <ol>Facebook</ol>
            <ol>Twitter</ol>
            <ol>Linkedin</ol>
            <ol>Instagram</ol>
          </ol>
        </div>
      </div>
      <div className="footer_bottom">
        Site Design / logo @ 2021 Stack Exchange Inc;user contributions licensed
        under cc by-sa rev 2021.4.30.39183
      </div>
    </div>
  );
}

export default Footer;
