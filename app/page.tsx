import { MainNav } from "@/components/main-nav"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <MainNav />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-10 md:py-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--foreground-rgb),0.1),transparent)]" aria-hidden="true"></div>
        <div className="absolute -left-4 -top-20 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.19rem] bg-gradient-to-tr from-primary/20 to-primary-foreground/20 opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Daniel Hafezian
            </h1>
            <p className="text-base md:text-xl text-muted-foreground font-light mb-4">
              Full Stack Developer specializing in modern web applications and AI integration
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Projects */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h2 id="projects" className="text-2xl font-bold border-b pb-2 scroll-m-20">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PerspectiView Project */}
              <ProjectCard 
                title="PerspectiView: Transform Narratives Into Perspectives"
                description={[
                  "A web application that transforms third-person narratives into multiple first-person perspectives, helping users understand how different characters experience the same events in stories.",
                  "Using Google's Gemini 2.0 Flash model for analysis, the application automatically identifies characters, generates perspective-based retellings, and creates visual timelines showing emotional and perceptual variations across characters."
                ]}
                technologies={[
                  { name: "Next.js" },
                  { name: "React" },
                  { name: "TypeScript" },
                  { name: "Tailwind CSS" },
                  { name: "Chart.js" },
                  { name: "Google Gemini API" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/danielhafezi/perspectiview" }
                ]}
                image={{
                  src: "/PerspectiView.gif",
                  alt: "PerspectiView Demonstration"
                }}
              />

              {/* EHR Explorer Project */}
              <ProjectCard 
                title="EHR Explorer: Patient Medication Analysis Tool"
                description={[
                  "Processes longitudinal Electronic Health Record (EHR) data from synthetic patients to deliver AI-powered insights into medication patterns and health trends.",
                  "The tool enables healthcare professionals to track medication effectiveness, identify potential interactions, and visualize patient health trajectories over time. Users can explore comprehensive cross-analyses of conditions and medications through an intuitive interface designed to surface meaningful patterns in complex healthcare data."
                ]}
                technologies={[
                  { name: "Next.js" },
                  { name: "React" },
                  { name: "Tailwind CSS" },
                  { name: "SQLite" },
                  { name: "Google Gemini API" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/danielhafezi/EHR-Explorer" }
                ]}
                image={{
                  src: "/EHR.gif",
                  alt: "EHR Explorer Demo"
                }}
              />

              {/* JustBYOK Project */}
              <ProjectCard 
                title="JustBYOK: Bring Your Own Key AI Chat Platform"
                description={[
                  "A privacy-focused LLM chat interface where you control your data. All conversations and API keys remain stored locally on your device.",
                  "JustBYOK supports multiple LLM providers including OpenAI, Anthropic, and Google with full parameter control, conversation organization, and a clean, intuitive interface."
                ]}
                technologies={[
                  { name: "Next.js" },
                  { name: "React" },
                  { name: "AI SDK" },
                  { name: "TypeScript" },
                  { name: "Tailwind CSS" },
                  { name: "IndexedDB" },
                  { name: "LocalStorage" }
                ]}
                links={[
                  { text: "Website", url: "https://justbyok.com" }
                ]}
                image={{
                  src: "/JustBYOK.png",
                  alt: "JustBYOK AI Chat Platform"
                }}
              />

              {/* EssayEvaluator Project */}
              <ProjectCard 
                title="EssayEvaluator: Automated Essay Scoring"
                description={[
                  "State-of-the-Art Automated Essay Scoring system using a 3.8B parameter language model that outperforms larger commercial models.",
                  "This AI model provides accurate scoring for academic essays, matching industry standards with a QWK of 0.82. The system reduces error rates by nearly 65% compared to baseline models while offering a 99.99% cost reduction compared to commercial alternatives."
                ]}
                technologies={[
                  { name: "PyTorch" },
                  { name: "Hugging Face" },
                  { name: "NLTK" },
                  { name: "spaCy" },
                  { name: "NumPy" },
                  { name: "Pandas" }
                ]}
                links={[
                  { text: "Hugging Face", url: "https://huggingface.co/DanielHafezi/essayevaluator" },
                  { text: "GitHub", url: "https://github.com/danielhafezi/EssayEvaluator" }
                ]}
                image={{
                  src: "/EssayEvaluator.png",
                  alt: "Essay Evaluator Overview"
                }}
              />

              {/* BetaAnalysisTool Project */}
              <ProjectCard 
                title="BetaAnalysisTool: Crypto Market Analytics"
                description={[
                  "A multi-stack application designed to analyze crypto market data and calculate beta values for digital assets.",
                  "The tool provides interactive dashboards for crypto market analysis with beta pattern tracking, helping traders identify risk profiles across various digital assets."
                ]}
                technologies={[
                  { name: "Python" },
                  { name: "React" },
                  { name: "Pandas" },
                  { name: "NumPy" },
                  { name: "Streamlit" },
                  { name: "Plotly" },
                  { name: "CCXT" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/danielhafezi/BetaAnalysisTool" }
                ]}
                image={{
                  src: "https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/ticker_analysis.png",
                  alt: "Market Analysis Dashboard"
                }}
              />

              {/* GradPathAI Project */}
              <ProjectCard 
                title="GradPathAI: University Application Assistant"
                description={[
                  "AI-powered tools to assist students with university applications, built and launched as the founder.",
                  "GradPathAI delivers personalized recommendations through multi-agent AI systems, helping students navigate the complex university application process with confidence."
                ]}
                technologies={[
                  { name: "Next.js" },
                  { name: "TypeScript" },
                  { name: "LangChain JS" },
                  { name: "LangGraph JS" },
                  { name: "Azure" }
                ]}
                links={[
                  { text: "Website", url: "https://gradpathai.com" }
                ]}
                image={{
                  src: "/GradPathAI.png",
                  alt: "GradPathAI Landing Page"
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* StaffWorkloadManager Project */}
              <ProjectCard 
                title="StaffWorkloadManager: Academic Workload Management"
                description={[
                  "A JavaFX application for managing and calculating staff workloads in academic settings, ensuring compliance with contractual obligations and custom-defined activity rules."
                ]}
                technologies={[
                  { name: "Java" },
                  { name: "JavaFX" },
                  { name: "Serialization" },
                  { name: "JUnit" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/danielhafezi/StaffWorkloadManager" }
                ]}
                image={{
                  src: "https://raw.githubusercontent.com/DanielHafezi/StaffWorkloadManager/main/project_overview.png",
                  alt: "Staff Workload Manager Screenshot"
                }}
                infoTooltip="Final assignment of Visual Object Software MSc module, A+"
              />

              {/* ScholarshipScout Project */}
              <ProjectCard 
                title="ScholarshipScout: Multi-Agent AI Web Scraper"
                description={[
                  "Multi-Agent AI based web scraper designed to search for fully funded doctorate positions from popular academic position websites.",
                  "Helps users find PhD opportunities by scraping data from websites like ScholarshipDB and FindAPhD, filtering positions based on desired countries and saving results in multiple formats."
                ]}
                technologies={[
                  { name: "Python" },
                  { name: "AutoGen" },
                  { name: "BeautifulSoup" },
                  { name: "HTTPX" },
                  { name: "Pandas" },
                  { name: "Asyncio" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/DanielHafezi/ScholarshipScout" }
                ]}
                image={{
                  src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                  alt: "ScholarshipScout Web Scraper"
                }}
              />

              {/* PremierPulse Project */}
              <ProjectCard 
                title="PremierPulse: Premier League Management and Reporting"
                description={[
                  "A comprehensive web application for Premier League information management and statistics reporting, developed as a final project for an Internet Programming module."
                ]}
                technologies={[
                  { name: "HTML5" },
                  { name: "CSS3" },
                  { name: "JavaScript" },
                  { name: "JSON" },
                  { name: "PHP" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/danielhafezi/PremierPulse" }
                ]}
                image={{
                  src: "https://raw.githubusercontent.com/DanielHafezi/PremierPulse/master/project_overview.png",
                  alt: "Premier Pulse Screenshot"
                }}
                infoTooltip="Final assignment of Web Development MSc module, A+"
              />

              {/* JobMatchCV Project */}
              <ProjectCard 
                title="JobMatchCV: AI-Powered Resume Optimizer"
                description={[
                  "An innovative multi-agent system that leverages the AutoGen framework to enhance CVs based on specific job advertisements.",
                  "This system analyzes both the CV and job requirements, generates tailored enhancement suggestions, and converts the improved CV to a professional markdown format."
                ]}
                technologies={[
                  { name: "Python" },
                  { name: "AutoGen" },
                  { name: "PyPDF2" },
                  { name: "python-docx" },
                  { name: "BeautifulSoup" },
                  { name: "Markdown" }
                ]}
                links={[
                  { text: "GitHub", url: "https://github.com/DanielHafezi/JobMatchCV" }
                ]}
                image={{
                  src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                  alt: "JobMatchCV Resume Optimizer"
                }}
              />
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="col-span-1">
            <div id="about" className="sticky top-24">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6 scroll-m-20 lg:block hidden">About Me</h2>
              <Card className="overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className="relative">
                  <img 
                    src="/ProfilePicture.png" 
                    alt="Daniel Hafezian" 
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Hi, I'm Daniel Hafezian. I'm a full-stack developer specializing in rapid web and AI application deployment using modern AI-first tools.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Toolset</h3>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-sm font-medium">Frontend:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">React</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Next.js</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Shadcn UI</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">TypeScript</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Framer Motion</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Tailwind CSS</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-1.5">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-sm font-medium">Backend:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Node.js</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">FastAPI</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">RESTful APIs</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">PostgreSQL</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-1.5">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-sm font-medium">AI & ML:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Python</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">LLM APIs</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Chatbots</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Fine-tuning</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">RAG</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">LangChain</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">TensorFlow</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-1.5">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-sm font-medium">Cloud:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Azure</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">Docker</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm">GitHub Actions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Professional Experience</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <Briefcase size={16} className="text-primary mr-2 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Full Stack Developer, Bahamta</p>
                          <p className="text-xs text-muted-foreground">September 2021 - February 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Briefcase size={16} className="text-primary mr-2 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Python Developer, Fandogh PaaS</p>
                          <p className="text-xs text-muted-foreground">October 2020 - August 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Mail size={16} className="text-primary mr-2 shrink-0" />
                        <a href="mailto:danielhafezian@gmail.com" className="hover:text-primary transition-colors">danielhafezian@gmail.com</a>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-primary mr-2 shrink-0" />
                        <span className="text-muted-foreground">(+44) 749 749 8257</span>
                      </div>
                      <div className="flex items-center">
                        <Github size={16} className="text-primary mr-2 shrink-0" />
                        <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                      </div>
                      <div className="flex items-center">
                        <Linkedin size={16} className="text-primary mr-2 shrink-0" />
                        <a href="https://www.linkedin.com/in/danielhafezi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:h-16">
            <p className="text-sm text-muted-foreground">© {currentYear} Daniel Hafezian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}