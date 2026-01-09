import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-black z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-800">
          <span className="text-white font-semibold text-lg">
            Menu
          </span>
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-6 py-6 space-y-5">
          <NavLink
            to="/"
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
            className={({ isActive }) =>
              isActive
                ? "text-amber-600 font-medium"
                : "text-white font-medium hover:text-yellow-400 transition"
            }
          >
            CONTACT
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;




/** 
 * How to Use It (IMPORTANT)

You must control it from the Header or Layout.

Example in Header or Layout:
const [sidebarOpen, setSidebarOpen] = useState(false);

<button onClick={() => setSidebarOpen(true)}>☰</button>

<Sidebar
  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
/>
 */