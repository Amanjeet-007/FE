import React from 'react';

const Button = ({ children, variant = "primary", className = "", icon: Icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;