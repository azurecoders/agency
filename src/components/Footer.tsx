"use client";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      // In a real app, you would send this to your API
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-background pt-16 pb-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Newsletter Section */}
        <div className="relative mb-16 bg-gradient-to-r from-secondary/90 to-secondary rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_70%)]"></div>

          <div className="relative px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
              <p className="text-neutral-300">
                Subscribe to our newsletter to receive the latest updates and
                exclusive offers.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center space-x-2 bg-primary/10 text-primary px-6 py-4 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-neutral-800/80 px-6 py-3 rounded-lg outline-none border border-neutral-700 focus:ring-2 focus:ring-primary w-full sm:w-auto"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Company Info Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="font-bold text-background">A</span>
              </div>
              <h3 className="text-xl font-bold">Ageencee</h3>
            </div>

            <p className="text-neutral-400 max-w-sm">
              We deliver innovative solutions that drive growth and transform
              businesses in the digital landscape.
            </p>

            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-sm font-medium">ageencee@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <p className="text-sm font-medium">+123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Address</p>
                  <p className="text-sm font-medium">
                    123 Street, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold text-primary mb-6">Menu</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/reviews"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-lg font-semibold text-primary mb-6">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/services/seo"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Search Engine Optimization
              </Link>
              <Link
                href="/services/content-marketing"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Content Marketing
              </Link>
              <Link
                href="/services/web-design"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Web Design & Development
              </Link>
              <Link
                href="/services/social-media"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Social Media Marketing
              </Link>
              <Link
                href="/services/branding"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Brand Strategy & Identity
              </Link>
              <Link
                href="/services/analytics"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Analytics & Reporting
              </Link>
            </div>
          </div>

          {/* Utility Pages & Social */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-lg font-semibold text-primary mb-6">Legal</h3>
            <div className="flex flex-col gap-3 mb-8">
              <Link
                href="/privacy"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                href="/license"
                className="text-sm text-neutral-300 hover:text-primary transition-all duration-300"
              >
                Licensing
              </Link>
            </div>

            <h3 className="text-lg font-semibold text-primary mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                className="w-9 h-9 border border-neutral-700 hover:border-primary rounded-full flex items-center justify-center text-neutral-400 hover:text-primary transition-all duration-300"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-9 h-9 border border-neutral-700 hover:border-primary rounded-full flex items-center justify-center text-neutral-400 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://dribbble.com"
                className="w-9 h-9 border border-neutral-700 hover:border-primary rounded-full flex items-center justify-center text-neutral-400 hover:text-primary transition-all duration-300"
              >
                <Dribbble size={16} />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-9 h-9 border border-neutral-700 hover:border-primary rounded-full flex items-center justify-center text-neutral-400 hover:text-primary transition-all duration-300"
              >
                <Instagram size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-[1px] w-full bg-neutral-800 mb-6"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Ageencee. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/sitemap"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300"
            >
              Sitemap
            </Link>
            <span className="text-neutral-700">•</span>
            <Link
              href="/accessibility"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
