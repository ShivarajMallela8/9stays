import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // Button variants
  isLoading?: boolean; // Loading state
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary', // Default variant
  isLoading = false,   // Default loading state
  children,
  className,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none transition-all duration-200';
  const variantStyles = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading} // Disable the button while loading
      {...props}
    >
      {isLoading ? (
        <span className="loader" /> // You can add a loader component or icon here
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
