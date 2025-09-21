import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filterOptions = [
  "Villa",
  "Rooms",
  "Apartment",
  "Countryside",
  "Self Checkin",
  "Luxury",
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  // Filter properties if a filter is active
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((cat) =>
          cat.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('https://example.com/hero-image.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl text-center max-w-xl">
          The best prices for over 2 million properties worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition">
          Explore Now
        </button>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{property.name}</h2>
                <p className="text-gray-500 text-sm">
                  {property.address.city}, {property.address.state},{" "}
                  {property.address.country}
                </p>
                <p className="text-gray-800 font-semibold mt-2">
                  ${property.price}
                </p>
                <p className="text-yellow-500">⭐ {property.rating}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {property.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
