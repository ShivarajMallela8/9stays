import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the input
  error?: string; // Optional error message
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-purple-700 mb-1" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className={`block w-full border rounded-lg shadow-sm p-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:border-purple-500 focus:ring-purple-500 transition duration-200`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
