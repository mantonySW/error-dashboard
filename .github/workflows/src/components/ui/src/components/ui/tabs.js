import React from 'react';

export function Tabs({ value, onValueChange, className = "", children, ...props }) {
  return (
    <div className={`w-full ${className}`} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, onValueChange });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ className = "", children, ...props }) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`} role="tablist" {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = "", ...props }) {
  const isSelected = value === props.value;
  return (
    <button
      role="tab"
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isSelected ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50"
      } ${className}`}
      {...props}
      onClick={() => props.onValueChange && props.onValueChange(props.value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "", ...props }) {
  const isSelected = value === props.value;
  return (
    <div
      role="tabpanel"
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        !isSelected ? "hidden" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
