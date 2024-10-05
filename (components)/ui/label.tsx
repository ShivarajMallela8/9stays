import React from 'react';

interface LabelProps {
  htmlFor: string; // The id of the input this label is associated with
  children: React.ReactNode; // The content of the label
  className?: string; // Optional className for additional styling
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-purple-700 mb-1 ${className}`} // Default styling for the label
    >
      {children}
    </label>
  );
};

export default Label;
