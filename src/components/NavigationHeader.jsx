import React from "react";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";

export function NavigationHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <Code className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            DataForge Portfolio
                        </span>
                    </a>
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
                        <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
                        <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</a>
                        <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
                        <Link to="/AboutMe" className="transition-colors hover:text-foreground/80 text-foreground/60">About Me</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    {/* Future place for buttons or theme toggle */}
                </div>
            </div>
        </header>
    );
}
