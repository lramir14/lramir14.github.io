import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Briefcase } from "lucide-react";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16 md:py-24 border-t border-border/40">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Local LLM RAG System</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        [Detailed description of your LLM RAG project. Highlight key features and technologies used.]
                    </p>
                    <Button variant="link" className="p-0 h-auto">View on GitHub <Github className="ml-2 h-4 w-4" /></Button>
                </div>
                {/* Project Card 2 */}
                <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Data Science Project 2</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        [Description of another data science project. Focus on impact and skills demonstrated.]
                    </p>
                    <Button variant="link" className="p-0 h-auto">View on GitHub <Github className="ml-2 h-4 w-4" /></Button>
                </div>
                {/* Project Card 3 */}
                <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Data Visualization Hub</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        [Description of a project showcasing data visualization skills. Mention tools like Recharts if applicable.]
                    </p>
                    <Button variant="link" className="p-0 h-auto">Live Demo <Briefcase className="ml-2 h-4 w-4" /></Button>
                </div>
            </div>
        </section>
    );
}
