import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header/Navigation */}
      <header className="bg-black py-4">
        <div className="container mx-auto px-6">
          <nav>
            <ul className="flex justify-center space-x-8">
              <li><a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-400 hover:text-blue-300 transition-colors">About</a></li>
              <li><a href="#projects" className="text-blue-400 hover:text-blue-300 transition-colors">Projects</a></li>
              <li><a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub Profile</a></li>
              <li><a href="mailto:danielhafezian@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Daniel Hafezian | Full Stack Developer</h1>
          <p className="text-xl text-gray-400">A collection of AI projects and applications. A work in progress.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Projects */}
          <div className="lg:w-2/3 space-y-12">
            {/* Project 1 */}
            <div id="projects" className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">EssayEvaluator: Automated Essay Scoring</h2>
                <p className="mb-4">
                  State-of-the-Art Automated Essay Scoring system using a 3.8B parameter language model that outperforms larger commercial models.
                </p>
                <p className="mb-4">
                  This AI model provides accurate scoring for academic essays, matching industry standards with a QWK of 0.82. The system reduces error rates by nearly 65% compared to baseline models while offering a 99.99% cost reduction compared to commercial alternatives.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PyTorch: Fine-tuning and model architecture</li>
                    <li>Hugging Face Transformers: Base model and tokenization</li>
                    <li>NLTK & spaCy: Text preprocessing and feature extraction</li>
                    <li>NumPy & Pandas: Data manipulation and analysis</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <a 
                    href="https://huggingface.co/DanielHafezi/essayevaluator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Available on Hugging Face
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a 
                    href="https://github.com/danielhafezi/EssayEvaluator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Available on GitHub
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <img 
                src="/app_overview.png" 
                alt="Essay Evaluator Overview" 
                className="w-full h-auto object-cover border-t border-gray-700"
              />
            </div>

            {/* Project 2 - ScholarshipScout */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">ScholarshipScout: Multi-Agent AI Web Scraper</h2>
                <p className="mb-4">
                  Multi-Agent AI based web scraper designed to search for fully funded doctorate positions from popular academic position websites.
                </p>
                <p className="mb-4">
                  Helps users find PhD opportunities by scraping data from websites like ScholarshipDB and FindAPhD, filtering positions based on desired countries and saving results in multiple formats.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Python: Core scraping and agent implementation</li>
                    <li>AutoGen: Multi-agent orchestration</li>
                    <li>BeautifulSoup & HTTPX: Web scraping tools</li>
                    <li>Pandas: Data processing and export capabilities</li>
                    <li>Asyncio: Asynchronous processing for efficient scraping</li>
                  </ul>
                </div>
                <a 
                  href="https://github.com/DanielHafezi/ScholarshipScout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View on GitHub
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="ScholarshipScout Web Scraper" 
                className="w-full h-64 object-cover border-t border-gray-700"
              />
            </div>

            {/* Project 3 - JobMatchCV */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">JobMatchCV: AI-Powered Resume Optimizer</h2>
                <p className="mb-4">
                  An innovative multi-agent system that leverages the AutoGen framework to enhance CVs based on specific job advertisements.
                </p>
                <p className="mb-4">
                  This system analyzes both the CV and job requirements, generates tailored enhancement suggestions, and converts the improved CV to a professional markdown format.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Python: Core application functionality</li>
                    <li>AutoGen: Multi-agent collaboration system</li>
                    <li>PyPDF2 & python-docx: Document parsing</li>
                    <li>BeautifulSoup: Web scraping for job descriptions</li>
                    <li>Markdown: Professional CV formatting</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Key agents:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>User Input Agent: Handles document extraction</li>
                    <li>CV & Job Analysis Agents: Examine structure and requirements</li>
                    <li>ATS Standards Agent: Ensures compatibility with application systems</li>
                    <li>CV Enhancement & Markdown Conversion Agents: Generate optimized output</li>
                  </ul>
                </div>
                <a 
                  href="https://github.com/DanielHafezi/JobMatchCV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View on GitHub
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="JobMatchCV Resume Optimizer" 
                className="w-full h-64 object-cover border-t border-gray-700"
              />
            </div>
          </div>

          {/* Right Column - About Me */}
          <div id="about" className="lg:w-1/3">
            <div className="bg-gray-800 rounded-lg overflow-hidden sticky top-6">
              <img 
                src="/ProfilePicture.jpg" 
                alt="Daniel Hafezian" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="mb-6">
                  Hi, I'm Daniel Hafezian. I'm a full-stack developer specializing in rapid web and AI application deployment using modern AI-first tools.
                </p>
                
                {/* Changed order - Toolset now comes before Professional Experience */}
                <h3 className="text-lg font-semibold mb-2">Toolset</h3>
                <div className="mb-6 space-y-2">
                  <p><span className="font-medium">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS</p>
                  <p><span className="font-medium">Backend:</span> Node.js, RESTful APIs, SQL</p>
                  <p><span className="font-medium">AI & ML:</span> Python, LLM APIs, LangChain, TensorFlow</p>
                  <p><span className="font-medium">Cloud:</span> Azure, Docker, GitHub Actions</p>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
                <div className="mb-4 space-y-3">
                  <div className="flex items-start">
                    <Briefcase size={18} className="text-blue-400 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Founder, GradPathAI</p>
                      <p className="text-sm text-gray-400">June 2024 - Present</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase size={18} className="text-blue-400 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Full Stack Developer, Bahamta</p>
                      <p className="text-sm text-gray-400">September 2021 - February 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase size={18} className="text-blue-400 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Python Developer, Fandogh PaaS</p>
                      <p className="text-sm text-gray-400">October 2020 - August 2021</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail size={18} className="text-blue-400 mr-2" />
                    <a href="mailto:danielhafezian@gmail.com" className="hover:text-blue-400">danielhafezian@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-blue-400 mr-2" />
                    <span>(+44) 749 749 8257</span>
                  </div>
                  <div className="flex items-center">
                    <Github size={18} className="text-blue-400 mr-2" />
                    <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin size={18} className="text-blue-400 mr-2" />
                    <a href="https://www.linkedin.com/in/danielhafezi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Daniel Hafezian. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/danielhafezi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:danielhafezian@gmail.com" className="text-gray-500 hover:text-blue-400">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;