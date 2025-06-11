// C:\Users\luisf\Desktop\webpage\lramir14.github.io\components\ui\card.tsx

import React from 'react';

// Base Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }
const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
    <div
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
        {...props}
    >
        {children}
    </div>
);

// CardHeader component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }
const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => (
    <div
        className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
        {...props}
    >
        {children}
    </div>
);

// CardTitle component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }
const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => (
    <h3
        className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
        {...props}
    >
        {children}
    </h3>
);

// CardContent component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }
const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => (
    <div className={`p-6 pt-0 ${className || ''}`} {...props}>
        {children}
    </div>
);

// Export all components
export { Card, CardHeader, CardTitle, CardContent };