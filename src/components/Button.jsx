import React from "react";
import clsx from "clsx";

const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    link: "text-blue-600 hover:underline p-0 h-auto",
};

const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const Button = ({ children, className = "", variant = "default", size = "md", asChild = false, ...props }) => {
    const classes = clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none",
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    if (asChild) {
        return React.cloneElement(children, {
            className: clsx(children.props.className, classes),
            ...props,
        });
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
