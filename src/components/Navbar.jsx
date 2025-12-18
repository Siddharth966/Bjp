import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navRef = useRef(null);

  // Close navbar on click
  const closeNavbar = () => {
    if (navRef.current.classList.contains("show")) {
      navRef.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          onClick={closeNavbar}
        >
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="fw-bold navbar-title">
            Pallavi Walhekar
          </span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse text-center"
          id="navMenu"
          ref={navRef}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center mt-3 mt-lg-0">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={closeNavbar}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/vision"
                className="nav-link"
                onClick={closeNavbar}
              >
                Vision
              </NavLink>
            </li>

              <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={closeNavbar}
              >
                Contact 
              </NavLink>
            </li>

            {/* CTA */}
            <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
              <Link
                to="/vision"
                className="btn btn-warning fw-semibold px-4 w-100 w-lg-auto"
                onClick={closeNavbar}
              >
                My Vision
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
