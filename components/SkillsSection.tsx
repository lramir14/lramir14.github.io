import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Skills data based on user CV
const skillsData = {
    "Programming Languages": [
        { name: "Python", proficiency: 95, experience: 6, description: "Advanced proficiency in Python for data science, AI/ML (TensorFlow, Keras, Ollama, GPT/Groq APIs), web development (Flask), and data manipulation (NumPy, Pandas).", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "R", proficiency: 90, experience: 6, description: "Advanced proficiency in R & R Studio for data science, statistical analysis, NLP (spaCy, LDA), and visualization (dplyr, ggplot2).", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    ],
    "AI/ML & NLP Specialization": [
        { name: "Deep Learning", proficiency: 90, experience: 4, description: "Implementing deep learning models (TensorFlow, Keras) for various tasks. Coursework focus.", logo: "https://img.icons8.com/fluency/48/neural-network.png" },
        { name: "Machine Learning", proficiency: 90, experience: 5, description: "Applying ML models for business requirements and social science research. Coursework focus.", logo: "https://img.icons8.com/fluency/48/artificial-intelligence.png" },
        { name: "Natural Language Processing (NLP)", proficiency: 92, experience: 4, description: "Building NLP pipelines, text analysis, RAG systems, prompt engineering. Applied in research and projects.", logo: "https://img.icons8.com/fluency/48/corpus.png" },
        { name: "RAG Systems", proficiency: 88, experience: 2, description: "Using and building Retrieval Augmented Generation systems for text analysis and information retrieval.", logo: "https://img.icons8.com/fluency/48/data-configuration.png" },
        { name: "Prompt Engineering", proficiency: 85, experience: 2, description: "Crafting and optimizing prompts for LLMs (GPT API, Groq API, Ollama) in research pipelines.", logo: "https://img.icons8.com/fluency/48/pencil-tip.png" },
    ],
    "LLM Technologies": [
        { name: "GPT API Models", proficiency: 85, experience: 3, description: "Utilizing OpenAI's GPT models via API for research and NLP tasks.", logo: "https://img.icons8.com/color/48/openai-logo.png" },
        { name: "Groq API", proficiency: 80, experience: 2, description: "Leveraging Groq API for high-speed LLM inference in projects.", logo: "https://img.icons8.com/fluency/48/rocket.png" },
        { name: "Ollama Models", proficiency: 78, experience: 2, description: "Running and interacting with local LLMs using Ollama for various applications.", logo: "https://img.icons8.com/fluency/48/server.png" },
    ],
    "Python Ecosystem (Data Science & Web)": [
        { name: "TensorFlow", proficiency: 90, experience: 4, description: "Advanced use of TensorFlow for deep learning models.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", proficiency: 85, experience: 4, description: "High-level API for TensorFlow for rapid prototyping.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "NumPy", proficiency: 92, experience: 5, description: "Fundamental for numerical computation in Python.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", proficiency: 92, experience: 5, description: "Essential for data manipulation and analysis, including large datasets.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Flask", proficiency: 80, experience: 3, description: "Building web applications and APIs with Flask.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Jupyter Notebook", proficiency: 95, experience: 6, description: "Extensive use for interactive computing, data exploration, and model development.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" },
    ],
    "R Ecosystem (Data Science)": [
        { name: "dplyr", proficiency: 90, experience: 5, description: "Core for data manipulation in R.", logo: "https://img.icons8.com/fluency/48/r-project.png" },
        { name: "ggplot2", proficiency: 88, experience: 5, description: "Advanced data visualization in R.", logo: "https://img.icons8.com/fluency/48/bar-chart.png" },
        { name: "spaCy (for R)", proficiency: 75, experience: 3, description: "NLP tasks within R using spaCy.", logo: "https://img.icons8.com/fluency/48/r-project.png" }, // Using generic R for now
        { name: "LDA", proficiency: 78, experience: 3, description: "Topic modeling with Latent Dirichlet Allocation in R/Python.", logo: "https://img.icons8.com/fluency/48/mind-map.png" },
    ],
    "Data Management & Cloud Platforms": [
        { name: "Data Cleaning", proficiency: 90, experience: 5, description: "Cleaning and preprocessing large datasets (e.g., +29GB text data).", logo: "https://img.icons8.com/fluency/48/data-backup.png" },
        { name: "Google Colab", proficiency: 85, experience: 4, description: "Cloud-based Jupyter notebooks for ML/data science projects.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Kaggle Notebooks", proficiency: 80, experience: 3, description: "Cloud notebooks for Kaggle competitions and data analysis.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg" },
    ],
};

interface Skill {
    name: string;
    proficiency: number;
    experience?: number;
    description?: string;
    logo?: string;
}

interface SkillCategoryProps {
    categoryName: string;
    skills: Skill[];
}

const SkillCategoryChart: React.FC<SkillCategoryProps> = ({ categoryName, skills }) => {
    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow bg-card">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-primary">{categoryName}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={skills} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="name" stroke="var(--foreground)" angle={-30} textAnchor="end" height={70} interval={0} />
                        <YAxis stroke="var(--foreground)" domain={[0, 100]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                            labelStyle={{ color: 'var(--primary-foreground)' }}
                        />
                        <Legend wrapperStyle={{ color: 'var(--foreground)' }} />
                        <Bar dataKey="proficiency" fill="var(--chart-1)" name="Proficiency (%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-4">
                    {skills.map(skill => (
                        <div key={skill.name} className="flex items-start p-3 rounded-md border border-border/70 bg-background/30">
                            {skill.logo && <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10 mr-4 flex-shrink-0" />}
                            <div>
                                <h4 className="font-semibold text-lg text-foreground">{skill.name}</h4>
                                {skill.experience && <p className="text-xs text-muted-foreground">Experience: {skill.experience} years</p>}
                                {skill.description && <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export const SkillsSection: React.FC = () => {
    return (
        <div className="space-y-12">
            {Object.entries(skillsData).map(([categoryName, skills]) => (
                <SkillCategoryChart key={categoryName} categoryName={categoryName} skills={skills} />
            ))}

            {/* Certifications & Achievements Section */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-card mt-12">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-center text-primary">Publications & Achievements</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                    {/* Achievement 1 */}
                    <div className="flex flex-col items-center text-center p-4 border border-border/70 rounded-lg bg-background/30 hover:shadow-md transition-shadow">
                        <img src="https://img.icons8.com/fluency/48/trophy.png" alt="Datafest Badge" className="w-20 h-20 mb-3" />
                        <h4 className="font-semibold text-lg text-foreground">Munich’s 2025 Datafest</h4>
                        <p className="text-sm text-muted-foreground mt-1">Participant</p>
                    </div>
                    {/* Publication 1 */}
                    <div className="flex flex-col items-center text-center p-4 border border-border/70 rounded-lg bg-background/30 hover:shadow-md transition-shadow">
                        <img src="https://img.icons8.com/fluency/48/news.png" alt="Publication Badge" className="w-20 h-20 mb-3" />
                        <h4 className="font-semibold text-lg text-foreground">2019 Democratization Index in Mexico</h4>
                        <p className="text-sm text-muted-foreground mt-1">Collaborator</p>
                        <a href="https://idd-mex.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1">Access Here</a>
                    </div>
                    {/* Publication 2 */}
                    <div className="flex flex-col items-center text-center p-4 border border-border/70 rounded-lg bg-background/30 hover:shadow-md transition-shadow">
                        <img src="https://img.icons8.com/fluency/48/rules.png" alt="Publication Badge" className="w-20 h-20 mb-3" />
                        <h4 className="font-semibold text-lg text-foreground">2019-2020 Rule of Law in Mexico Index</h4>
                        <p className="text-sm text-muted-foreground mt-1">Collaborator (World Justice Project)</p>
                    </div>
                    {/* Placeholder for Languages - Can be a simple list or its own card if desired */}
                    <div className="md:col-span-2 lg:col-span-3 border border-border/70 rounded-lg bg-background/30 p-4 mt-4">
                        <h4 className="font-semibold text-lg text-center text-foreground mb-2">Languages</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-center">
                            <li>Spanish (Native)</li>
                            <li>English (C2 Proficient)</li>
                            <li>French (B1-B2 Intermediate)</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
