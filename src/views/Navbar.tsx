import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => location.pathname === path;

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 py-6 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Glow effect wrapper */}
            <div className="absolute -inset-5 rounded-full -z-10">
              <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full"></div>
              <div className="absolute inset-0 bg-blue-200/40 blur-2xl rounded-full"></div>
            </div>

            {/* Main nav container */}
            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-blue-100/50 mx-auto max-w-4xl relative transition-all duration-300 hover:shadow-blue-200/70">
              <div className="flex justify-between items-center px-10 py-4">
                <div className="flex-shrink-0 mr-16">
  <img
    src="public/Photo/S.JPG"
    alt="Logo"
    className="h-12 w-auto object-contain"
  />
</div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-3 flex-grow justify-end mr-8">
                  {["/", "/projects", "/about", "/contact"].map((path) => (
                    <Link
                      key={path}
                      to={path}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        isActive(path)
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {path === "/"
                        ? "Home"
                        : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </Link>
                  ))}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block flex-shrink-0">
                  <Link
                    to="/hire"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
                  >
                    Hire Me
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 rounded-full hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md border-l border-blue-100/50 shadow-xl p-6">
            <button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="mt-16">
              <div className="flex flex-col space-y-4">
                {["/", "/projects", "/about", "/contact"].map((path) => (
                  <Link
                    key={path}
                    to={path}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      isActive(path)
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                ))}
                <Link
                  to="/hire"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
