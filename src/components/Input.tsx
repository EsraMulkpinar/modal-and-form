import React from "react";
import { InputProps } from "@/types/inputTypes";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          ref={ref}
          className={`border-b px-3 py-2 focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
          {...props}
          placeholder={label}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
