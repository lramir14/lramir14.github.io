import React from "react";
import Button from './Button';
import { Briefcase, Download } from "lucide-react";

export function HeroSection() {
    return (
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
                    <a href="/resume.pdf" download>
                        <Download className="mr-2 h-5 w-5" /> Download Resume
                    </a>
                </Button>
            </div>
        </section>
    );
}
