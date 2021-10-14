import React from "react";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-sm navbar-dark text-white fixed-bottom">
      <h2>Contact and Links</h2>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item nav-link">(925) 521-8325</li>
        <li className="nav-item">
          <a className="nav-link" href="mailto: dev.alex.yu@gmail.com">
            dev.alex.yu@gmail.com
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
      </ul>
    </footer>
  );
};

export default Footer;
