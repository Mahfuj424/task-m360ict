import React from "react";
import { cn } from "../../lib/utils";

export type ButtonVariant = "default" | "outlined"; // Change from 'outline' to 'outlined'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<ButtonVariant, string> = {
      default: "bg-purple-600 text-purple-500 py-2 hover:bg-purple-700",
      outlined: "border border-gray-300 text-gray-900 hover:bg-gray-100", // Updated from 'outline' to 'outlined'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
