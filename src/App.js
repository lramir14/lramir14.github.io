import React from "react";
import { NavigationHeader } from "./components/NavigationHeader";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            <NavigationHeader />
            <main className="space-y-40 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
