import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../public/images/MyTechMasonryLogo1.png";
import useHeroObserver from "../hook/useHeroObserver";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const scrolled = useHeroObserver();
  return (
    <header  className={`fixed w-full bg-black/90 backdrop-blur-md backdrop-blur-md z-50 transition-all duration-300
    ${scrolled
      ? "bg-black/90 backdrop-blur-md shadow-lg"
      : "bg-black/40t"
    }
  `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="MyTechMasonry Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              SERVICES
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              SKILLS
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 text-sm font-medium"
                  : "text-white text-sm font-medium hover:text-yellow-400 transition"
              }
            >
              CONTACT
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 space-y-4">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              SERVICES
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              SKILLS
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-600 font-medium"
                  : "text-white font-medium hover:text-yellow-400 transition"
              }
            >
              CONTACT
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
