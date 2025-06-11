// C:\Users\luisf\Desktop\webpage\lramir14.github.io\components\ui\avatar.tsx

import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string; // For AvatarFallback if you use it
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, children, ...props }) => {
    return (
        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200" {...props}>
            {src && <img className="aspect-square h-full w-full" src={src} alt={alt || "Avatar"} />}
            {!src && <span className="flex h-full w-full items-center justify-center text-xs">{children || "AB"}</span>}
        </div>
    );
};

// You might export these if they are part of the same file
const AvatarImage: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => {
    return <img className="aspect-square h-full w-full" src={src} alt={alt} />;
};

const AvatarFallback: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-300 text-xs">{children || "AB"}</span>;
};


export { Avatar, AvatarImage, AvatarFallback }; // Export these named exports