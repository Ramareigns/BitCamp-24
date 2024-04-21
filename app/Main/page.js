'use client';

import React, { useState } from 'react';
import Navbar from '../nav';
import PropertyModal from '../property'; // Import the modal component

const properties = [
    { 
        id: 1, 
        name: 'Spacious Urban Retreat with Garden Oasis', 
        price: '$500,000', 
        location: 'New York',
        wUrl:'rainy.png', 
        weather: 'New York experiences a humid subtropical climate, characterized by hot summers and cold winters. However, climate change may lead to increased temperatures and more extreme weather events such as heatwaves and heavy precipitation.',
        averageTemperature: '55°F (13°C)',
        imageUrl: '1.png',
        bedrooms: 4,
        bathrooms: 3,
        area: '2000 sqft',
        address: {
          street: 'Maple Avenue',
          addressLine: '123 Maple Avenue',
          city: 'New York',
          state: 'NY',
          postalCode: '10001'
        }
      },
      { 
        id: 2, 
        name: 'Cozy Lakefront Cottage with Serene Views', 
        price: '$300,000', 
        location: 'Los Angeles',
        wUrl:'Sun.png', 
        weather: 'Los Angeles has a Mediterranean climate, known for its warm, dry summers and mild, wet winters. Climate change may exacerbate drought conditions and increase the frequency and severity of wildfires in the region.',
        averageTemperature: '72°F (22°C)',
        imageUrl: '2.png',
        bedrooms: 2,
        bathrooms: 1,
        area: '1200 sqft',
        address: {
          street: 'Lakefront Drive',
          addressLine: '456 Lakefront Drive',
          city: 'Los Angeles',
          state: 'CA',
          postalCode: '90001'
        }
      },
      { 
        id: 3, 
        name: 'Luxurious Downtown Apartment with Skyline Views', 
        price: '$700,000', 
        location: 'Chicago',
        wUrl:'cloudy.png', 
        weather: 'Chicago experiences a humid continental climate with distinct seasons, including hot summers and cold winters. Climate change may result in more frequent heatwaves and heavy rainfall events, impacting the city’s infrastructure.',
        averageTemperature: '52°F (11°C)',
        imageUrl: '3.png',
        bedrooms: 3,
        bathrooms: 2,
        area: '1500 sqft',
        address: {
          street: 'Main Street',
          addressLine: '789 Main Street, Apt 201',
          city: 'Chicago',
          state: 'IL',
          postalCode: '60601'
        }
      },
      { 
        id: 4, 
        name: 'Stunning Victorian Home with Panoramic Bay Views', 
        price: '$900,000', 
        location: 'San Francisco',
        wUrl:'wind.png', 
        weather: 'San Francisco has a Mediterranean climate with mild, wet winters and dry summers. However, climate change could lead to more variable weather patterns, including increased fog and sea-level rise, which may impact coastal areas.',
        averageTemperature: '60°F (16°C)',
        imageUrl: '4.png',
        bedrooms: 5,
        bathrooms: 4,
        area: '3000 sqft',
        address: {
          street: 'Ocean View Boulevard',
          addressLine: '101 Ocean View Blvd',
          city: 'San Francisco',
          state: 'CA',
          postalCode: '94101'
        }
      },
      { 
        id: 5, 
        name: 'Exquisite Seaside Villa with Breathtaking Ocean Views', 
        price: '$1,200,000', 
        location: 'Miami',
        wUrl:'Sun.png', 
        weather: 'Miami enjoys a tropical monsoon climate with hot, humid summers and warm, dry winters. Climate change may result in stronger hurricanes and increased flooding, posing risks to coastal properties.',
        averageTemperature: '78°F (26°C)',
        imageUrl: '5.png',
        bedrooms: 6,
        bathrooms: 5,
        area: '3500 sqft',
        address: {
          street: 'Palm Avenue',
          addressLine: '555 Palm Ave',
          city: 'Miami',
          state: 'FL',
          postalCode: '33101'
        }
      },
      { 
        id: 6, 
        name: 'Rustic Mountain Retreat Cabin with Scenic Views', 
        price: '$400,000', 
        location: 'Denver',
        wUrl:'snow.png', 
        weather: 'Denver has a semi-arid climate with low humidity and four distinct seasons. However, climate change may bring more erratic weather patterns, including increased temperatures and drought conditions, impacting water resources and agriculture.',
        averageTemperature: '50°F (10°C)',
        imageUrl: '6.png',
        bedrooms: 3,
        bathrooms: 2,
        area: '1800 sqft',
        address: {
          street: 'Mountain View Drive',
          addressLine: '777 Mountain View Dr',
          city: 'Denver',
          state: 'CO',
          postalCode: '80201'
        }
        },
  // Add more properties here
];

export default function Main() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar /> 

      <main className="flex-grow max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mt-20 text-center">Properties</h1>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map(property => (
            <div key={property.id} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src={property.imageUrl} 
                alt={property.name} 
                className="w-full h-48 object-cover cursor-pointer" 
                onClick={() => openModal(property)} // Open modal when image is clicked
              />
              <h2 className="p-2 text-xl font-semibold text-gray-800">{property.name}</h2>
              <p className="px-2 pb-3 text-gray-600">Price: {property.price}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Render modal only if a property is selected */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
}