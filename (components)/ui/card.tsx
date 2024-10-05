import React from 'react';

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string; // Optional className for custom styling
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// CardHeader Component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string; // Optional className for custom styling
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={`bg-purple-600 text-white p-4 ${className}`}>
      {children}
    </div>
  );
};

// CardTitle Component
interface CardTitleProps {
  children: React.ReactNode;
  className?: string; // Optional className for custom styling
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h2 className={`text-xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

// CardContent Component
interface CardContentProps {
  children: React.ReactNode;
  className?: string; // Optional className for custom styling
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

// Exporting components
export { Card, CardHeader, CardTitle, CardContent };
