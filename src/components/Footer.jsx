import React from "react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40">
            <div className="container text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} lfrr1993 — DataForge Portfolio.</p>
            </div>
        </footer>
    );
}
