import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/(components)/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-12 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Our Location</h2>
        
        {/* Use Flexbox to arrange the first two cards side by side */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Address Card */}
          <Card className="bg-white border border-purple-200 shadow-lg transition-transform transform hover:scale-105 flex-1 h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-white-800">
                <MapPin className="w-6 h-6 mr-2" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 p-3">123 Luxury Avenue, Cityville, State 12345, Country</p>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-white border border-purple-200 shadow-lg transition-transform transform hover:scale-105 flex-1 h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-white-800">
                <Phone className="w-6 h-6 mr-2" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-800">
                <Mail className="w-4 h-4 inline mr-1" />
                Email: info@9stays.com
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Center the Nearby Attractions card below the first two cards */}
        <div className="flex justify-center mt-8">
          <Card className="bg-white border border-purple-200 shadow-lg transition-transform transform hover:scale-105 w-full max-w-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-white-800">
                <MapPin className="w-6 h-6 mr-2" />
                Nearby Attractions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-800">
                <li>City Center (0.5 miles)</li>
                <li>Central Park (1 mile)</li>
                <li>Museum of Modern Art (1.2 miles)</li>
                <li>Shopping District (0.7 miles)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
