import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyListingApp</div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Listings
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search properties..."
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-gray-700">Menu</button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-100 py-2 px-4 flex justify-center space-x-4 overflow-x-auto">
        {["Rooms", "Mansion", "Countryside", "Villa", "Apartment"].map(
          (type) => (
            <span
              key={type}
              className="px-4 py-1 bg-white border rounded-full text-gray-700 cursor-pointer hover:bg-blue-100"
            >
              {type}
            </span>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
