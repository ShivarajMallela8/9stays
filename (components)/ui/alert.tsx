import React from 'react';

interface AlertProps {
  className?: string; // Optional className for custom styling
  children: React.ReactNode; // Content of the alert
}

const Alert: React.FC<AlertProps> = ({ className, children }) => {
  return (
    <div className={`p-4 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
};

interface AlertDescriptionProps {
  children: React.ReactNode; // Content of the alert description
}

const AlertDescription: React.FC<AlertDescriptionProps> = ({ children }) => {
  return <div className="mt-2 text-sm text-gray-700">{children}</div>; // Styled for description
};

// Exporting components
export { Alert, AlertDescription };
