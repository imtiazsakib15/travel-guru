import { Link, NavLink } from "react-router-dom";
import logo from './../assets/logo.png';

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-6">
      <div>
        <Link to="/">
          <img className="w-28" src={logo} alt="" />
        </Link>
      </div>
      <div className="font-semibold text-lg space-x-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/destination"
        >
          Destination
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
