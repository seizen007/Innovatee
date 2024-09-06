import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import images from "../../assets/Photos";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:mt-[291px] text-center md:text-start">
          {/* Logo and Description */}
          <div className="md:col-span-1 flex flex-col items-center md:block">
            <div className="logo">
              <picture>
                <img src={images.footerLogo} alt="Innovate Logo" />
              </picture>
            </div>
            <p className="text-gray-600 mt-2 font-dmSan">
              Build a modern and creative website with Innovate.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600">
                <FaGoogle size={20} />
              </a>
              <a href="#" className="text-gray-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 font-chivo">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Landingpages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 font-chivo">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 font-chivo">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Guides and resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-dmSan">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 font-chivo">
              Get Latest Updates
            </h3>
            <p className="text-gray-600 mt-4 font-dmSan">
              Subscribe to our newsletter and get many interesting things every week.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                className="px-4 py-2 w-full rounded-l-lg border border-gray-300 focus:outline-none font-dmSan"
                placeholder="Your Email Address"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg">
                <FaPaperPlane size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-600 font-dmSan">
          <p>© 2024 Innovate • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
