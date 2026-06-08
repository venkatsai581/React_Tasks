import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="sub-nav">
        <NavLink to="web-development">
          Web Development
        </NavLink>

        <NavLink to="app-development">
          App Development
        </NavLink>

        <NavLink to="uiux-design">
          UI/UX Design
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;