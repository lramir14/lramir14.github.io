// C:\Users\luisf\Desktop\webpage\lramir14.github.io\components\ui\button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // You can add custom props here later if needed
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            {...props}
        >
            {children}
        </button>
    );
};

export { Button }; // Export it as a named export