// src/App.tsx
// import React from "react";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Code, Github, Linkedin, Mail, Briefcase, Download } from "lucide-react";
// For now, comment out React Router imports until we set it up
// import { Link } from "react-router-dom";
import { SkillsSection } from "./components/SkillsSection";
import './index.css';


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Portfolio
              </span>
            </a>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#contact"
              >
                Contact
              </a>
              {/* For now, comment out the Link to AboutMe until react-router-dom is fully set up */}
              {/* <Link
                to="/AboutMe"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About Me
              </Link> */}
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
            <AvatarImage src="/my-avatar.jpeg" alt="Luis Ramirez" />
            <AvatarFallback>LFRR</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm Luis Fernando Ramirez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A Data Scientist and Public Policy professional crafting solutions from complex data.
            Hold a Master of Science in Data Science and a Master's in Public Policy from the Hertie School

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

            <p className="mb-6">
              [Driven and analytical Data Science and Public Policy professional with experience in implementing natural language
              processing, deep learning and machine learning models applied to business requirements and/or social science
              research.]
            </p>

            <p className="mb-6">
              [Experienced in the use of LLMs, statistical modelling, data engineering, data analysis and visualization,
              political risks for S&P 500 companies in several industries, and stakeholder management and
              digitalization strategies. Proficient in statistics and quantitative methods in R Studio and Python.]
            </p>

            <p className="mb-6">

              [Current interests involve data engineering, developing and fine-tuning local LLMs using Ollama, Gradio, and LangChain.
              During my free time I play football (midfield and defender.), watch movies, and read Sci-Fi and philosophy books.
              I travel consistently to Poznan, Poland and currently learning German and Polish.]
            </p>
          </div>
        </section>

        {/* Placeholder for Projects Section */}
        <section id="projects" className="py-16 md:py-24 border-t border-border/40">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Placeholder 1 */}
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Local LLM RAG System</h3>
              <p className="text-muted-foreground text-sm mb-4">
                [QWEN3 0.6b model with a 4-bit quantization. The UI was developed using Gradio. <br />
                The project is aimed at using a local Language Model as an Assistant that allows you to upload pdfs and will tailor the answers according to the provided documents. <br />
                A panel below will help visualize the main sources the model considered to provide an answer. <br />
                It includes a section that enables web search to the model using DuckDuckGo python library.] <br />

              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                {/* Replace "YOUR_LLM_RAG_GITHUB_URL_HERE" with the actual URL to that project's GitHub repo */}
                <a href="https://github.com/lramir14/agent" target="_blank" rel="noopener noreferrer">
                  View on GitHub <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* INSERT IMAGE HERE */}
              <img
                src="/localrag.png" // Path to your image in the public folder
                alt="Screenshot of Local LLM RAG System" // Descriptive alt text is important!
                className="w-full object-cover rounded-md mb-4" // Tailwind classes for styling
              />

            </div>
            {/* Project Card Placeholder 2 */}
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Geospatial Analysis of Police Lethality in São Paulo</h3>
              <p className="text-muted-foreground text-sm mb-4">
                [Brazil’s state of São Paulo reports hundreds of police-related deaths each year, but the where and why behind those deaths remain poorly understood. Using 2022 census micro-data, detailed shapefiles, and incident-level police-mortality records (2013-2025), we:]
              </p>
              {/* START OF THE LIST */}
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-4 space-y-1">
                <li>Geocode individual deaths and assign them to districts.</li>
                <li>Distribute census population and household income down to census-sector slices that align with district borders.</li>
                <li>Map raw counts, per-capita death rates, and Local Indicators of Spatial Association (LISA) clusters.</li>
                <li>Model lethal-force risk with spatial-lag and spatial-error SAR models, testing demographic, income, and urban-form predictors.</li>
              </ul>
              {/* END OF THE LIST */}
              <p className="text-muted-foreground text-sm mb-4">
                [The full workflow is scripted in reproducible R Markdown (R/PoliceKillingsFinal.Rmd) and documented below.]
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                {/* Replace "YOUR_LLM_RAG_GITHUB_URL_HERE" with the actual URL to that project's GitHub repo */}
                <a href="https://github.com/rfdornelles/geospatial_assignments" target="_blank" rel="noopener noreferrer">
                  View on GitHub <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* INSERT IMAGE HERE */}
              <img
                src="/maps.png" // Path to your image in the public folder
                alt="4 maps to synthesize the Geospatial analysis" // Descriptive alt text is important!
                className="w-full object-cover rounded-md mb-4" // Tailwind classes for styling
              />

            </div>

            {/* Project Card Placeholder 3 */}
            <div className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Modelling Uncertainty with Bayesian Neural Networks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                [Developed a tutorial, in which I was in charge of creating a Bayesian Neural Network, to model uncertainty.<br />
                The tutorial begins by introducing the theoretical foundations of BNNs, emphasizing their ability to represent uncertainty
                in model weights as probability distributions. <br /> This approach contrasts traditional deterministic models, providing confidence
                intervals alongside predictions, which are essential for high-stakes decision-making in domains like energy systems, healthcare, and finance.<br />
                The case study developed in the tutorial used energy data specified for a country and time period.]
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                {/* Replace "YOUR_LLM_RAG_GITHUB_URL_HERE" with the actual URL to that project's GitHub repo */}
                <a href="https://github.com/hertie-data-science-lab/tutorial-group_4" target="_blank" rel="noopener noreferrer">
                  View on GitHub <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* INSERT IMAGE HERE */}
              <img
                src="/bnn.png"
                alt="Bayesian Neural Network predictions"
                className="w-full object-cover rounded-md mb-4"
              />
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
              <a href="mailto:lfrr93@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-8 w-8" />
              </a>
              <a href="https://github.com/lramir14" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com/in/luis-fernando-ramírez-ruiz-ab7698b5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
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