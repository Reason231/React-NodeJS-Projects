import { FaFacebookF, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Shopping Experience */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Shopping Experience</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Order Tracking</li>
            <li className="hover:text-emerald-400 cursor-pointer">Gift Cards</li>
            <li className="hover:text-emerald-400 cursor-pointer">Store Locator</li>
            <li className="hover:text-emerald-400 cursor-pointer">Affiliate Program</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Help Center</li>
            <li className="hover:text-emerald-400 cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-emerald-400 cursor-pointer">Shipping Info</li>
            <li className="hover:text-emerald-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Company Info</li>
            <li className="hover:text-emerald-400 cursor-pointer">Careers</li>
            <li className="hover:text-emerald-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-emerald-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Payment Methods & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">We Accept</h3>
          <div className="flex space-x-4 text-3xl mb-6 text-gray-400">
            <FaCcVisa className="hover:text-emerald-400 cursor-pointer" />
            <FaCcMastercard className="hover:text-emerald-400 cursor-pointer" />
            <FaCcPaypal className="hover:text-emerald-400 cursor-pointer" />
          </div>

          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <FaFacebookF className="hover:text-emerald-400 cursor-pointer" />
            <FaInstagram className="hover:text-emerald-400 cursor-pointer" />
            <FaTwitter className="hover:text-emerald-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 Rijan Khadgi. All rights reserved.
      </div>
    </footer>
  );
};

