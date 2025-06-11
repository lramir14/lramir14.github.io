// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx'; // Or import Home from './ui/home.tsx';
import '/ui/src/index.css'; // Your global CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter> {/* Wrap your main component with BrowserRouter */}
            <Home /> {/* Or <Home /> */}
        </BrowserRouter>
    </React.StrictMode>,
);