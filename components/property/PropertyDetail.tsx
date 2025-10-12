import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Column */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{property.description}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {property.category.map((amenity, idx) => (
              <li key={idx} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/3">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
