import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Mail, Briefcase, GraduationCap, Lightbulb, Sparkles } from "lucide-react";

const AboutMe = () => {
// Placeholder data - to be personalized based on CV and further input
const professionalSummary = `
Driven and analytical Data Science and Public Policy professional with experience in implementing natural language
processing pipelines, deep learning and machine learning models applied to business requirements and/or social science
research. Experienced in the use of LLMs, deep learning models and pipelines, statistical modelling, data engineering,
analysis and visualization, political risks for S&P 500 companies in several industries, and stakeholder management and
digitalization strategies. Proficient in statistics and quantitative methods in R Studio and Python.
`;

const education = [
{
degree: "Master of Data Science for Public Policy",
school: "Hertie School, Berlin, Germany",
dates: "Aug 2023 – June 2025 (Expected)",
relevant: "Deep Learning, Machine Learning, Data Structures, NLP, Geospatial Analysis",
},
{
degree: "Master of Public Policy",
school: "Hertie School, Berlin, Germany",
dates: "Aug 2022 – June 2024",
relevant: "Policy Analysis, Economics, Applied Network Analysis, AI & Climate Change",
},
{
degree: "Bachelor of Political Science",
school: "Instituto Tecnológico Autónomo de México (ITAM), Mexico City",
dates: "Aug 2014 – Dec 2017",
relevant: "Research on Electoral Behavior, Political Philosophy, Inferential Statistics",
},
{
degree: "Bachelor of Philosophy (with Honors)",
school: "Universidad Nacional Autónoma de México (UNAM), Mexico City",
dates: "Aug 2014 – Aug 2018",
relevant: "Political Philosophy, Metaphysics, Ontology",
},
];

const experience = [
{
role: "Werkstudent",
company: "Capgemini Deutschland - Berlin",
dates: "June 2024 – Current",
description: "Analyze legal documents for public sector digitalization, draft strategic information, monitor software
development trends (digital sovereignty, OSS vs. proprietary software).",
},
{
role: "Research Associate",
company: "Hertie School, SCRIPTS Project – Berlin",
dates: "Nov 2023 – Current",
description: "Build/use RAG systems, prompt engineering for LLMs, NLP for text analysis, clean large databases (+29GB),
analyze text data with unsupervised ML.",
},
{
role: "Solution Consultant",
company: "The Stakeholder Company – Singapore",
dates: "Mar 2021 – Dec 2023",
description: "Managed S&P 500 client accounts for stakeholder management digitalization, presented policy
recommendations, drafted industry reports for LATAM & US.",
},
{
role: "Project Analyst",
company: "The Stakeholder Company – Singapore",
dates: "Dec 2018 – Mar 2021",
description: "Relocated internal workflows (40% cost reduction), managed key projects in Mexico/North America, utilized
statistical methods for political risk capture.",
},
{
role: "Research Assistant",
company: "El Colegio de México – Mexico City",
dates: "Feb 2018 – Feb 2020",
description: "Assisted in academic research, translation, database management, implemented polynomial/logit models for
voter conduct analysis.",
},
];

const professionalPhilosophy = `
I believe in leveraging data-driven insights to tackle complex challenges at the intersection of technology, policy, and
society. My approach is analytical, solution-oriented, and grounded in a commitment to ethical AI and impactful
outcomes. I thrive on translating intricate data into actionable strategies and clear narratives.
`;

const personalInterests = [
"Exploring the societal impact of AI",
"Open Source Software development and communities",
"Data visualization for storytelling",
"Reading on political philosophy and tech ethics",
];

// Placeholder social links
const socialLinks = {
linkedin: "https://www.linkedin.com/in/your-profile",
github: "https://github.com/lramir14",
email: "your.email@example.com",
};

return (
<div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 bg-background text-foreground">
    <header className="mb-12 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary ring-offset-4 ring-offset-background">
            {/* Replace with your actual image URL or a dynamic one if available */}
            <AvatarImage src="https://github.com/lramir14.png" alt="lramir14" />
            <AvatarFallback className="text-4xl">LF</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Luis Fernando</h1> {/* Replace with
        actual name if different */}
        <p className="text-xl md:text-2xl text-muted-foreground mt-2">Data Scientist & Policy Analyst</p>
    </header>

    {/* Professional Bio Section */}
    <Card className="mb-10 shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center">
                <Sparkles className="mr-3 h-6 w-6 text-primary" /> Professional Bio
            </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <p>{professionalSummary}</p>
        </CardContent>
    </Card>

    {/* Education Section */}
    <Card className="mb-10 shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" /> Education
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                {education.map((edu, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-md bg-background/30">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-primary font-medium">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.dates}</p>
                    <p className="text-sm mt-1 text-muted-foreground"><em>Relevant: {edu.relevant}</em></p>
                </div>
                ))}
            </div>
        </CardContent>
    </Card>

    {/* Professional Experience Section */}
    <Card className="mb-10 shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-primary" /> Professional Experience
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative border-l-2 border-primary/50 pl-6 space-y-8">
                {experience.map((exp, index) => (
                <div key={index} className="relative">
                    <span
                        className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-1">{exp.dates}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
                ))}
            </div>
        </CardContent>
    </Card>

    {/* Professional Philosophy Section */}
    <Card className="mb-10 shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center">
                <Lightbulb className="mr-3 h-6 w-6 text-primary" /> Professional Philosophy
            </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <p>{professionalPhilosophy}</p>
        </CardContent>
    </Card>

    {/* Personal Interests Section */}
    <Card className="mb-10 shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center">
                <Sparkles className="mr-3 h-6 w-6 text-primary" /> Personal Interests
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {personalInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
                ))}
            </ul>
        </CardContent>
    </Card>

    {/* Contact Section */}
    <Card className="shadow-lg bg-card">
        <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center space-x-6">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={32} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={32} />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={32} />
            </a>
        </CardContent>
    </Card>

</div>
);
};

export default AboutMe;