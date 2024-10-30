import React from "react";

const Input = ({
  iconRight,
  iconLeft,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="min-w-full">
      <div className="border border-neutral-300 min-w-full rounded-lg h-11 relative flex items-center">
        {iconLeft && (
          <img src={iconLeft} alt="icon" className="w-6 h-6 absolute ml-3" />
        )}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`min-w-full focus:outline-none focus:ring-1 focus:ring-blue-500 h-full rounded-lg ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
