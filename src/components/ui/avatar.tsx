// src/components/ui/avatar.tsx
import React from 'react';
import { cn } from "../../lib/utils"; // Adjusted path to utils

// Very simplified Avatar component for testing purposes
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
    className?: string;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Avatar = ({ children, className, ...props }: AvatarProps) => {
    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props}>
            {children}
        </div>
    );
};

const AvatarImage = ({ src, alt, className, ...props }: AvatarImageProps) => {
    return (
        <img src={src} alt={alt} className={cn("aspect-square h-full w-full", className)} {...props} />
    );
};

const AvatarFallback = ({ children, className, ...props }: AvatarFallbackProps) => {
    return (
        <div className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...props}>
            {children}
        </div>
    );
};

export { Avatar, AvatarImage, AvatarFallback };