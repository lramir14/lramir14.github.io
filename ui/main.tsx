import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home' // Now matches the filename and component name

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)