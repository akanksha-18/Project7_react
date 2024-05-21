import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`bg-${props.mode === "light" ? "white" : "gray-800"} shadow-md`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link className={`font-semibold text-xl ${props.mode === "light" ? "text-teal-500" : "text-teal-400"}`} to="/">
          {props.title}
        </Link>
        <button
          className="text-gray-500 md:hidden"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link className={`hover:text-teal-500 ${props.mode === "light" ? "text-gray-700" : "text-gray-300"}`} to="/">Home</Link>
          <Link className={`hover:text-teal-500 ${props.mode === "light" ? "text-gray-700" : "text-gray-300"}`} to="/about">{props.about}</Link>
          <Link className={`hover:text-teal-500 ${props.mode === "light" ? "text-gray-700" : "text-gray-300"}`} to="/contact">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`form-switch ${props.mode === "light" ? "text-gray-700" : "text-gray-300"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.togglemode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="ml-2" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
