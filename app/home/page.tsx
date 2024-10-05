'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '/images/hotel1.jpg',
    caption: 'Luxurious Rooms with Stunning Views',
  },
  {
    src: '/images/hotel2.jpg',
    caption: 'Relax in Our World-Class Spa',
  },
  {
    src: '/images/hotel3.jpg',
    caption: 'Gourmet Dining Experience',
  },
  {
    src: '/images/hotel4.jpg',
    caption: 'State-of-the-Art Conference Rooms',
  },
  {
    src: '/images/hotel5.jpg',
    caption: 'Elegant Poolside Lounges',
  },
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="about" className="relative h-screen bg-gray-900 text-gray-100">
      {/* Carousel Images and Text */}
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex].src}
          alt={`Hotel Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-5">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          {images[currentIndex].caption}
        </h2>
        <p className="text-lg text-gray-200 max-w-xl mb-8">
          At 9stays, we offer unmatched luxury and comfort, ensuring a perfect stay. From our elegant rooms to world-class amenities, we guarantee an experience you’ll never forget.
        </p>
        <button
          className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-white shadow-lg hover:bg-purple-700 focus:outline-none"
          onClick={() => router.push('/booking')}
        >
          Book Now
        </button>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex transform -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default About;
