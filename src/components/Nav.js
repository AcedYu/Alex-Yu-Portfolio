import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark text-white fixed-top">
      <h1>Alexander Yu</h1>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Introduction
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/experience">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/repositories">
            Repositories
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://docs.google.com/document/d/1WKlCaYbEr5HSC2ULHjmuzwwQf8yDj3Wn82GFH6aniKI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
