// src/components/SkillsSection.tsx
// import React from 'react';

// This ensures it's a NAMED export called SkillsSection
export const SkillsSection = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">My Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
                <li>Data Science (ML, DL, NLP)</li>
                <li>Python, R</li>
                <li>React, TypeScript</li>
                <li>Cloud Platforms</li>
            </ul>
        </div>
    );
};