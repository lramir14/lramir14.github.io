// src/components/SkillsSection.tsx
// import React from 'react';

// This ensures it's a NAMED export called SkillsSection
export const SkillsSection = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">My Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
                <li>Data Science (Machine Learning, Deep Learning, Natural Language Processing)</li>
                <li>Programming Languages: Python, R</li>
                <li>Main Libraries: Pandas, Transformers, NumPy, TensorFlow, Chroma, LangChain, Ollama</li>
                <li>Languages: Native Spanish, English (C2), French (B1), German(A2)</li>
            </ul>
        </div>
    );
};