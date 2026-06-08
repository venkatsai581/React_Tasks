import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/services">
        Services
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}

export default Navbar;