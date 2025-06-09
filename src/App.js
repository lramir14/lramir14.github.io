import React from "react";
import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <NavigationHeader />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
