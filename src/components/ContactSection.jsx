import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
    return (
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
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Github className="h-8 w-8" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </section>
    );
}
