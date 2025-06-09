import React from "react";

export function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 border-t border-border/40">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-center text-muted-foreground">
                <p className="mb-4">
                    [Placeholder for a brief bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.]
                </p>
                <p>
                    [Another paragraph about skills, interests, or career goals. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
                </p>
            </div>
        </section>
    );
}
