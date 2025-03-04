import React from "react";
import Logo from "../MovieLogo.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ watchlistCount }) => {
  const location = useLocation(); 

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">

      <div className="flex items-center space-x-3">
        <img className="w-12 rounded-md" src={Logo} alt="Logo" />
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-all duration-200">
          Movies
        </Link>
      </div>


      <div className="flex space-x-6">
        <Link
          to="/"
          className={`text-lg font-semibold px-3 py-2 rounded-md transition-all duration-200 ${
            location.pathname === "/" ? "bg-blue-600 text-white" : "hover:text-blue-400"
          }`}
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className={`text-lg font-semibold px-3 py-2 rounded-md transition-all duration-200 relative ${
            location.pathname === "/watchlist" ? "bg-blue-600 text-white" : "hover:text-blue-400"
          }`}
        >
          Watchlist
          {watchlistCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 shadow-md">
              {watchlistCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
