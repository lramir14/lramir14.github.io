import React from "react";
import clsx from "clsx";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx(
            "relative flex shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
));

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
    <img
        ref={ref}
        className={clsx("aspect-square h-full w-full", className)}
        {...props}
    />
));

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            className
        )}
        {...props}
    />
));

export { Avatar, AvatarImage, AvatarFallback };