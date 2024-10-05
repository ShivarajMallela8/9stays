"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  days: string;
  guests: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    days: '',
    guests: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    } else if (currentStep === 2) {
      if (!formData.days.trim()) newErrors.days = 'Number of days is required';
      else if (isNaN(Number(formData.days)) || Number(formData.days) < 1) newErrors.days = 'Invalid number of days';
      if (!formData.guests.trim()) newErrors.guests = 'Number of guests is required';
      else if (isNaN(Number(formData.guests)) || Number(formData.guests) < 1) newErrors.guests = 'Invalid number of guests';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(1)) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Use the formData state directly instead of accessing elements
    const formDataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      days: formData.days,
      guests: formData.guests,
    };

    console.log('Form Data:', formDataToSubmit);

    try {
      setIsSubmitting(true); // Start submitting state
      const response = await fetch('/api/submitBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const result = await response.json();
      console.log(result.message);
      setSubmitStatus('success'); // Set success state
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error'); // Set error state
    } finally {
      setIsSubmitting(false); // End submitting state
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  console.log('GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL);
console.log('SHEET_ID:', process.env.GOOGLE_SHEET_ID);
console.log('GOOGLE_PRIVATE_KEY length:', process.env.GOOGLE_PRIVATE_KEY?.length);

  return (
    <section id="booking" className="py-12 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-purple-800">Book Your Stay</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-purple-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">Reservation Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeVariants}
                  transition={{ duration: 0.3 }}
                  className="h-auto"
                >
                  {step === 1 && (
                    <>
                      <div>
                        <label htmlFor="name" className="block text-l font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full rounded-md h-8 shadow-sm ${errors.name ? 'border-red-300 focus:border-red-300 focus:ring focus:ring-red-200' : 'border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200'} text-l`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full h-8 rounded-md shadow-sm ${errors.email ? 'border-red-300 focus:border-red-300 focus:ring focus:ring-red-200' : 'border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200'} text-l`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full h-8 rounded-md shadow-sm ${errors.phone ? 'border-red-300 focus:border-red-300 focus:ring focus:ring-red-200' : 'border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200'} text-l`}
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div>
                        <label htmlFor="days" className="block text-l font-medium text-gray-700">Number of Days</label>
                        <input
                          type="number"
                          id="days"
                          name="days"
                          min="1"
                          value={formData.days}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full h-8 rounded-md shadow-sm ${errors.days ? 'border-red-300 focus:border-red-300 focus:ring focus:ring-red-200' : 'border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200'} text-l`}
                        />
                        {errors.days && <p className="mt-1 text-sm text-red-600">{errors.days}</p>}
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-l font-medium text-gray-700">Number of Guests</label>
                        <input
                          type="number"
                          id="guests"
                          name="guests"
                          min="1"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full h-8 rounded-md shadow-sm ${errors.guests ? 'border-red-300 focus:border-red-300 focus:ring focus:ring-red-200' : 'border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200'} text-l`}
                        />
                        {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests}</p>}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="flex space-x-4">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-1/2 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Back
                  </button>
                )}
                {step === 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md"
                  >
                    Next
                  </button>
                )}
                {step === 2 && (
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Now'}
                  </button>
                )}
              </div>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600 bg-green-100 border border-green-300 rounded-lg p-4 shadow-md transition duration-300 transform hover:scale-105">
                Your booking has been submitted successfully!
                We will contact you to confirm the booking.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600 bg-red-100 border border-red-300 rounded-lg p-4 shadow-md transition duration-300 transform hover:scale-105">
                There was an error submitting your booking. Please try again.
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
