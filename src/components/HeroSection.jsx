import React from "react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center text-center min-h-screen"
        >
            <div className="w-32 h-32 rounded-full bg-gray-700 text-white flex items-center justify-center text-xl font-semibold border-4 border-white mb-6">
                LFRR
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-white">lfrr1993</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                A Data Scientist crafting intelligent solutions from complex data. <br />
                Building robust LLM RAG systems and more.
            </p>
            <div className="flex gap-4">
                <a
                    href="#projects"
                    className="bg-white text-black px-6 py-3 rounded shadow font-semibold hover:bg-gray-200 transition"
                >
                    🧳 View Projects
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-3 rounded shadow font-semibold hover:bg-gray-700 transition"
                >
                    ⬇️ Download Resume
                </a>
            </div>
        </section>
    );
};