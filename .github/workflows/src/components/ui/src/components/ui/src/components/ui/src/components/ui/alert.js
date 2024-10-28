import React from 'react';

export function Alert({ variant = "default", children, ...props }) {
  const variantClasses = {
    default: "bg-gray-100 text-gray-900",
    destructive: "bg-red-100 text-red-900"
  };

  return (
    <div
      role="alert"
      className={`rounded-lg p-4 ${variantClasses[variant] || variantClasses.default}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ children, ...props }) {
  return <div className="text-sm" {...props}>{children}</div>;
}
