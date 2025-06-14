// src/components/ui/button.tsx
import React from 'react';
import { cn } from "../../lib/utils"; // Adjusted path to utils

// Very simplified Button component for testing purposes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'lg' | 'default';
    variant?: 'default' | 'outline' | 'link';
    asChild?: boolean;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, size = 'default', variant = 'default', asChild = false, className = '', ...props }, ref) => {
        const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
        const sizeClasses = {
            default: 'h-10 px-4 py-2',
            lg: 'h-11 px-8',
        };
        const variantClasses = {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        };

        const allClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

        if (asChild) {
            return React.cloneElement(children as React.ReactElement, { className: allClasses, ...props, ref } as any);
            // OR a more robust solution, but this often requires more complex type definitions
            // to correctly infer the ref type for the cloned element.
            // For quick fix and given this is a basic Shadcn adaptation, 'as any' is common.
        }

        return (
            <button className={allClasses} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
export { Button };