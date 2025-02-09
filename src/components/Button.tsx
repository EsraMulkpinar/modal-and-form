"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import ButtonProps from "@/types/buttonTypes";

export default function Button({
  onClick,
  children,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "text-white px-6 py-3 rounded-3xl font-fontRaleway font-semibold transition-all duration-200",
        {
          "bg-button hover:bg-button-hover": variant === "primary",
          "bg-gray-500 hover:bg-gray-600": variant === "secondary",
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
    >
      {children}
    </button>
  );
}
