import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

// Property Card Component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{property.name}</h3>
        <p className="text-gray-500 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-blue-600 font-semibold">${property.price} / night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
        {property.discount && (
          <p className="text-red-500 font-semibold">{property.discount}% OFF</p>
        )}
      </div>
    </div>
  );
};

// Home Page
const HomePage: React.FC = () => {
  const filters = ["Villa", "Mansion", "Rooms", "Apartment", "Countryside"];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
      >
        <h1 className="text-4xl font-bold mb-2 text-center">
          Find your favorite place here!
        </h1>
        <p className="text-lg text-center">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex justify-center space-x-4 overflow-x-auto px-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 whitespace-nowrap"
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
