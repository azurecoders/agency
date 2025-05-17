"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset resources dropdown when closing menu
    if (isMobileMenuOpen) setIsResourcesOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
  ];

  // Always use a solid background when mobile menu is open (fixes transparency bug)
  const headerBgClass = isMobileMenuOpen
    ? "bg-background"
    : isScrolled
    ? "bg-background/90 backdrop-blur-md shadow-lg shadow-primary/5"
    : "bg-background md:bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative z-10 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative">
                <div className="h-10 w-10 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
                WaveLyte
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    className="text-md font-medium cursor-pointer relative group"
                    href={link.href}
                  >
                    <span className="hover:text-primary transition-all duration-300 ease-in-out flex items-center">
                      {link.title}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              <li>
                <div className="text-md font-medium cursor-pointer group relative">
                  <div className="flex items-center gap-1 hover:text-primary transition-all duration-300">
                    Resources
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-full pt-3 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-64">
                    <div className="bg-background/95 backdrop-blur-xl rounded-xl border border-primary/20 shadow-xl shadow-primary/10 p-2 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-indigo-400 to-primary"></div>
                      {[
                        "Case Studies",
                        "Guides",
                        "Webinars",
                        "Documentation",
                      ].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors duration-200 flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70"></span>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/sign-up"
              className="font-medium text-md relative group"
            >
              <span className="hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">
                Sign Up
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2.5 rounded-full bg-primary text-secondary font-medium cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out relative group">
                Contact Us
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle - Fixed visibility with contrasting background */}
          <div className="md:hidden z-50">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Improved design */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          <nav className="flex-1">
            <ul className="space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-center text-xl font-medium hover:text-primary transition-colors duration-300 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1.5 h-8 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors duration-200"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="pb-6 border-b border-primary/10">
                <button
                  className="flex items-center justify-between w-full text-xl font-medium hover:text-primary transition-colors duration-300 group"
                  onClick={toggleResources}
                >
                  <div className="flex items-center">
                    <span className="w-1.5 h-8 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors duration-200"></span>
                    Resources
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`mt-4 ml-8 space-y-4 ${
                    isResourcesOpen ? "block" : "hidden"
                  }`}
                >
                  {["Case Studies", "Guides", "Webinars", "Documentation"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-lg text-foreground/70 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </li>
            </ul>
          </nav>
          <div className="space-y-4 pt-6 mt-4">
            <Link
              href="/sign-up"
              className="block text-center py-3.5 px-6 text-lg font-medium border border-primary/20 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/contact"
              className="block text-center bg-gradient-to-r from-primary to-indigo-500 text-background py-3.5 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary/10 via-background/50 to-transparent pointer-events-none"></div>
      </div>
    </header>
  );
};

export default Navbar;
