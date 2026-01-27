import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  const location = useLocation();
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
  ];

  // Social links (desktop only)
  const socials = [
    { href: "https://github.com/Novaav", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nova-zandkarimi-8b289032b/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "mailto:nova.zandkarimi@medieinstitutet.se", icon: <FaEnvelope />, label: "Email" },
  ];

  return (
    <motion.header
      className="fixed bottom-6 left-6 right-6 z-50 flex justify-center md:justify-between items-center"
      initial={{ y: 20, opacity: 0 }}
      animate={animateHeader ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
    >
      {/* ------------------ NAV LINKS + MOBILE GITHUB ------------------ */}
      <nav className="flex items-center space-x-4 bg-gray-100/90 text-gray-800 px-3 rounded-full shadow-md backdrop-blur-sm border border-gray-200 h-12">
        {links.map(({ path, label }) => {
          const isActive = location.pathname === path;
          return (
            <div key={path} className="relative flex items-center h-full px-4">
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{
                    type: "tween",
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              )}
              <NavLink
                to={path}
                className={`relative z-10 text-sm md:text-base font-medium px-2 py-1 transition-colors ${
                  isActive ? "text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                {label}
              </NavLink>
            </div>
          );
        })}

        {/* Mobile-only GitHub icon */}
        <a
          href="https://github.com/Novaav"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-700 hover:text-black text-lg md:hidden transition-colors"
        >
          <FaGithub />
        </a>
      </nav>

      {/* ------------------ DESKTOP SOCIAL ICONS (UNCHANGED) ------------------ */}
      <div className="hidden md:flex items-center space-x-3 bg-gray-100/90 px-3 rounded-full shadow-md backdrop-blur-sm border border-gray-200 h-12">
        {socials.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-700 hover:text-black text-lg md:text-xl transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
