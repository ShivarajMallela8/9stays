import React from 'react';
import { FaWifi, FaCar, FaUtensils, FaDumbbell, FaConciergeBell, FaShieldAlt } from 'react-icons/fa';

const AmenitiesSection: React.FC = () => {
  const mainAmenities = [
    {
      title: 'Free WiFi',
      icon: <FaWifi className="w-8 h-8 text-purple-700" />,
      description: 'High-speed internet access throughout the hotel at no extra cost.'
    },
    {
      title: 'Parking',
      icon: <FaCar className="w-8 h-8 text-purple-700" />,
      description: 'Complimentary parking with private parking options available.'
    },
    {
      title: 'Restaurant',
      icon: <FaUtensils className="w-8 h-8 text-purple-700" />,
      description: 'Our restaurant offers a variety of cuisines and dining options.'
    },
    {
      title: 'Fitness Center',
      icon: <FaDumbbell className="w-8 h-8 text-purple-700" />,
      description: 'Stay fit in our fully-equipped fitness center during your stay.'
    },
    {
      title: 'Concierge Service',
      icon: <FaConciergeBell className="w-8 h-8 text-purple-700" />,
      description: '24/7 concierge service to assist with your every need.'
    },
    {
      title: 'Safety & Security',
      icon: <FaShieldAlt className="w-8 h-8 text-purple-700" />,
      description: '24-hour security with CCTV surveillance for your safety.'
    }
  ];

  return (
    <section id="amenities" className="py-16 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left text section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6 text-purple-800">Discover Our Top Amenities</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At 9stays, we aim to provide a perfect balance of comfort, convenience, and luxury. Whether you&apos;re traveling for business or leisure, our wide range of premium amenities is designed to enhance your stay.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From high-speed internet to secure parking and fitness facilities, we offer everything you need for a relaxing and productive experience. Explore our key amenities below and see how we can make your stay extraordinary.
            </p>
          </div>

          {/* Right amenities grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {mainAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
                <div className="text-purple-700">{amenity.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-700">{amenity.title}</h3>
                  <p className="text-gray-600 mt-1">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
