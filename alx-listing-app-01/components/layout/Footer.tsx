import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">About Us</h2>
          <p className="text-gray-300 text-sm">
            We provide the best properties worldwide. Find your dream vacation
            home, apartment, or villa easily with our platform.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contact</h2>
          <p className="text-gray-300 text-sm">
            Email: support@mylistingapp.com
          </p>
          <p className="text-gray-300 text-sm">Phone: +1 234 567 890</p>
          <p className="text-gray-300 text-sm">
            Address: 123 Main St, City, Country
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyListingApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
