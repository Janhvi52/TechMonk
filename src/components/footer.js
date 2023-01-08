import "./Footer.css";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
            <FaHome size={20} style={{ color: "#000", marginRight: "2rem" }} />
            
            FemmeCare, India
            </h4>
            
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />
              +91-123-456-5435
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />
              +91-123-456-5435
            </h4>
          </div>
        </div>
        <div className="right">
          <h4><strong>About the company</strong></h4>
          <p>Inspiring healthier health!</p>
          <p>
            We the <strong>TechMonk</strong> are a group of girls striving to
            succor women henceforth moving a step ahead towards revolutionized
            femme care.
          </p>
          <div className="social">
          <Link to ="/">
          <FaFacebook
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
          </Link>
           <Link>
           <FaTwitter
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
           </Link>
           <Link>
           <FaLinkedinIn
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
           </Link>
            <Link>
            <FaGithub
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
