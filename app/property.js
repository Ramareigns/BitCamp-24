import React from 'react';

const PropertyModal = ({ property, closeModal }) => {
  const handleApply = () => {
    // Placeholder function for handling apply action
    // You can implement the actual functionality here
    console.log("Apply button clicked");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-3/4">
        <img src={property.imageUrl} alt={property.name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">{property.name}</h2>
        <p className="text-gray-600">Price: {property.price}</p>
        <p className="text-gray-600">Location: {property.location}</p>
        <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
        <p className="text-gray-600">Bathrooms: {property.bathrooms}</p>
        <p className="text-gray-600">Area: {property.area}</p>
        <img src={property.wUrl} alt="Weather" className="w-12 h-12 mt-4" />
        <p className="text-gray-600">{property.weather}</p>
        <p className="text-gray-600">Average Temperature: {property.averageTemperature}</p>
        <button onClick={handleApply} className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-2">
          Apply
        </button>
        <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default PropertyModal;