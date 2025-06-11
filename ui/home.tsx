import React from "react";
import { Button } from "../components/ui/button.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Github, Linkedin, Mail, Briefcase, Download } from "lucide-react";
import { Link } from "react-router-dom"; // Import for Link
import { SkillsSection } from "components/SkillsSection"; // Import SkillsSection

export default function Home() {
    // const { user, loading } = useCurrentUser(); // Removed as no longer needed
    // const navigate = useNavigate(); // Removed as no longer needed

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Navigation Header */}
            <header
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <Code className="h-6 w-6" />
                            <span className="hidden font-bold sm:inline-block">
                                DataForge Portfolio
                            </span>
                        </a>
                        <nav className="flex items-center gap-4 text-sm lg:gap-6">
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">
                                About
                            </a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
                                Projects
                            </a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
                                Skills
                            </a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
                                Contact
                            </a>
                            <Link to="/AboutMe" className="transition-colors hover:text-foreground/80 text-foreground/60">
                                About Me
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        {/* Login/Logout and Admin buttons removed for static site */}
                        {/* Add Theme Toggle if needed later */}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
                {/* Hero Section */}
                <section id="hero" className="text-center py-16 md:py-24">
                    <Avatar className="w-32 h-32 mx-auto mb-6 ring-2 ring-primary ring-offset-4 ring-offset-background">
                        <AvatarImage src="https://placehold.co/200x200/2d3748/e2e8f0?text=LFRR" alt="LFRR1993" />
                        <AvatarFallback>LFRR</AvatarFallback>
                    </Avatar>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Hi, I'm lfrr1993
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        A Data Scientist crafting intelligent solutions from complex data.
                        Building robust LLM RAG systems and more.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" asChild>
                            <a href="#projects">
                                <Briefcase className="mr-2 h-5 w-5" /> View Projects
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/resume.pdf" download> {/* Placeholder for resume */}
                                <Download className="mr-2 h-5 w-5" /> Download Resume
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Placeholder for Bio Section */}
                <section id="about" className="py-16 md:py-24 border-t border-border/40">
                    <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                    <div className="max-w-3xl mx-auto text-center text-muted-foreground">
                        <p className="mb-4">
                            [Placeholder for a brief bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.]
                        </p>
                        <p>
                            [Another paragraph about skills, interests, or career goals. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.]
                        </p>
                    </div>
                </section>

                {/* Placeholder for Projects Section */}
                <section id="projects" className="py-16 md:py-24 border-t border-border/40">
                    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card Placeholder 1 */}
                        <div
                            className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Local LLM RAG System</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                [Detailed description of your LLM RAG project. Highlight key features and technologies used.]
                            </p>
                            <Button variant="link" className="p-0 h-auto">View on GitHub
                                <Github className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        {/* Project Card Placeholder 2 */}
                        <div
                            className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Data Science Project 2</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                [Description of another data science project. Focus on impact and skills demonstrated.]
                            </p>
                            <Button variant="link" className="p-0 h-auto">View on GitHub
                                <Github className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        {/* Project Card Placeholder 3 */}
                        <div
                            className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Data Visualization Hub</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                [Description of a project showcasing data visualization skills. Mention tools like Recharts if
                                applicable.]
                            </p>
                            <Button variant="link" className="p-0 h-auto">Live Demo
                                <Briefcase className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Placeholder for Skills Section */}
                <section id="skills" className="py-16 md:py-24 border-t border-border/40">
                    <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
                    <div className="max-w-6xl mx-auto">
                        <SkillsSection />
                    </div>
                </section>

                {/* Placeholder for Contact Section */}
                <section id="contact" className="py-16 md:py-24 border-t border-border/40">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-muted-foreground mb-6">
                            Interested in collaborating or learning more about my work? Feel free to reach out.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
                                <Mail className="h-8 w-8" />
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary">
                                <Github className="h-8 w-8" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border/40">
                <div className="container text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} lfrr1993. All rights reserved.</p>
                    <p>Built with Databutton.</p>
                </div>
            </footer>
        </div>
    );
}