import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', children, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
