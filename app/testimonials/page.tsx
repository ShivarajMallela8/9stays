"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Had a wonderful stay at 9stays! The service was excellent and the rooms were clean and comfortable.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    text: "A perfect getaway! The amenities were fantastic, and the staff was very friendly.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    text: "The best hotel experience I&apos;ve had in India. Highly recommend the spa services!",
    rating: 5,
  },
  {
    name: "Priya Desai",
    text: "Beautiful location and great hospitality. Will definitely come back!",
    rating: 4,
  },
  {
    name: "Suresh Gupta",
    text: "Fantastic experience! The food was delicious and the staff went out of their way to help us.",
    rating: 5,
  },
  {
    name: "Meena Rani",
    text: "A cozy and welcoming hotel. The perfect place for families and couples alike.",
    rating: 4,
  },
  {
    name: "Rohan Verma",
    text: "Everything was perfect from check-in to check-out. Loved the amenities!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    text: "A delightful stay with a beautiful ambiance. Highly recommend for anyone visiting the area.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    if (!isClient) return testimonials.slice(0, 3);
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next].map((index) => testimonials[index]);
  };

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials">
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-purple-800 text-center mb-8">
            What Our Guests Say
          </h2>
          <div className="relative h-[200px] overflow-hidden">
            {visibleTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`absolute w-full max-w-md bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out ${
                  !isClient
                    ? "static mb-4"
                    : i === 0
                    ? "left-0 opacity-50 transform -translate-x-1/2 scale-75"
                    : i === 1
                    ? "left-1/2 opacity-100 transform -translate-x-1/2 scale-200 z-10"
                    : "left-full opacity-50 transform -translate-x-1/2 scale-75"
                }`}
              >
                <div className="text-yellow-400 text-xl mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
          {isClient && (
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === activeIndex ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
