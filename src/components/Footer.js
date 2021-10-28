import React from "react";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-sm navbar-dark text-white fixed-bottom">
      <h2>Contact and Links</h2>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item nav-link">(925)-750-0916</li>
        <li className="nav-item">
          <a className="nav-link" href="mailto: alexyu299@hotmail.com">
            alexyu299@hotmail.com
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/AcedYu"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/alex-yu-3712811b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
