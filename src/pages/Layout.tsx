import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../utils/ScrollToTop";
import { motion } from "framer-motion";

/**
 * Layout Component
 * ----------------
 * Wraps all pages with header and outlet.
 * Handles smooth page transitions and scroll-to-top behavior.
 */
const Layout: React.FC = () => {
  return (
    <>
      {/* Always visible header */}
      <Header />

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Animate pages without unmounting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </>
  );
};

export default Layout;
