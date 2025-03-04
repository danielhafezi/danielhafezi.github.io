import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Briefcase, Info, Sun, Moon, Menu, X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

// Modal component
function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-[90vw] max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[85vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', alt: '' });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openImageModal = (src: string, alt: string) => {
    setModalImage({ isOpen: true, src, alt });
  };

  const closeImageModal = () => {
    setModalImage({ isOpen: false, src: '', alt: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      {/* Header/Navigation */}
      <header className="bg-gray-100 dark:bg-black py-4 relative">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation links */}
            <ul className={`md:flex md:space-x-8 ${isMenuOpen ? 'absolute left-0 right-0 top-full bg-gray-100 dark:bg-black p-4 space-y-4 shadow-lg md:shadow-none z-50' : 'hidden'} md:relative md:p-0 md:space-y-0 md:bg-transparent md:dark:bg-transparent md:flex`}>
              <li><a href="#home" className="block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#projects" className="block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>GitHub Profile</a></li>
              <li><a href="mailto:danielhafezian@gmail.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Daniel Hafezian | Full Stack Developer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A collection of projects and applications. A work in progress.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Projects */}
          <div className="lg:w-2/3 space-y-12">
            {/* JustBYOK Project */}
            <div id="projects" className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">JustBYOK: Bring Your Own Key AI Chat Platform</h2>
                <p className="mb-4">
                  A privacy-focused LLM chat interface where you control your data. All conversations and API keys remain stored locally on your device.
                </p>
                <p className="mb-4">
                  JustBYOK supports multiple LLM providers including OpenAI, Anthropic, and Google with full parameter control, conversation organization, and a clean, intuitive interface.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Next.js & React: Frontend framework</li>
                    <li>TypeScript: Type-safe code</li>
                    <li>Tailwind CSS: Responsive styling</li>
                    <li>IndexedDB & LocalStorage: Client-side data persistence</li>
                  </ul>
                </div>
                <a 
                  href="https://justbyok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Available there
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="./hero.png" 
                alt="JustBYOK AI Chat Platform" 
                className="w-full h-auto object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("./hero.png", "JustBYOK AI Chat Platform")}
              />
            </div>

            {/* Project 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
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
                    Model Available on Hugging Face
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
                src="./app_overview.png" 
                alt="Essay Evaluator Overview" 
                className="w-full h-auto object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("./app_overview.png", "Essay Evaluator Overview")}
              />
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">BetaAnalysisTool: Crypto Market Analytics</h2>
                <p className="mb-4">
                  A multi-stack application designed to analyze crypto market data and calculate beta values for digital assets.
                </p>
                <p className="mb-4">
                  The tool provides interactive dashboards for crypto market analysis with beta pattern tracking, helping traders identify risk profiles across various digital assets.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Python: Core data processing</li>
                    <li>React: Frontend interface</li>
                    <li>Pandas & NumPy: Data manipulation</li>
                    <li>Streamlit & Plotly: Interactive visualizations</li>
                    <li>CCXT: Cryptocurrency exchange data</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <a 
                    href="https://github.com/danielhafezi/BetaAnalysisTool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Available on GitHub
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-700">
                <div className="grid grid-cols-2 divide-x divide-gray-700">
                  <img 
                    src="https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/market_analysis.png" 
                    alt="Market Analysis Dashboard" 
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal("https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/market_analysis.png", "Market Analysis Dashboard")}
                  />
                  <img 
                    src="https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/ticker_analysis.png" 
                    alt="Ticker Analysis Dashboard" 
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal("https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/ticker_analysis.png", "Ticker Analysis Dashboard")}
                  />
                </div>
              </div>
            </div>

            {/* Project 3 - GradPathAI */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">GradPathAI: University Application Assistant</h2>
                <p className="mb-4">
                  AI-powered tools to assist students with university applications, built and launched as the founder.
                </p>
                <p className="mb-4">
                  GradPathAI delivers personalized recommendations through multi-agent AI systems, helping students navigate the complex university application process with confidence.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Next.js & TypeScript: Core application development</li>
                    <li>LangChain JS & LangGraph JS: AI agent orchestration</li>
                    <li>Azure: Cloud deployment with CI/CD pipelines</li>
                    <li>Microsoft for Startups & NVIDIA Inception: Partnership programs</li>
                  </ul>
                </div>
                <a 
                  href="https://gradpathai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit GradPathAI
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="./landing.png" 
                alt="GradPathAI Landing Page" 
                className="w-full h-auto object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("./landing.png", "GradPathAI Landing Page")}
              />
            </div>

            {/* Project 4 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-bold text-blue-400">StaffWorkloadManager: Academic Workload Management</h2>
                  <div className="relative ml-2 group">
                    <Info size={20} className="text-gray-400 hover:text-gray-300 cursor-help" />
                    <div className="absolute hidden group-hover:block bg-gray-700 text-sm text-gray-200 px-3 py-2 rounded-md z-10 w-64
                      md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2
                      left-auto right-0 top-full mt-1">
                      Final assignment of Visual Object Software MSc module, A+
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  A JavaFX application for managing and calculating staff workloads in academic settings, ensuring compliance with contractual obligations and custom-defined activity rules.
                </p>
                <p className="mb-4">
                  Originally developed as a console-based system, the application evolved into a user-friendly GUI that allows for tracking, validation, and visualization of workload distributions across different activity types and trimesters.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Java: Core application logic</li>
                    <li>JavaFX: GUI implementation</li>
                    <li>Serialization: Data persistence</li>
                    <li>JUnit: Testing framework</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <a 
                    href="https://github.com/danielhafezi/StaffWorkloadManager" 
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
                src="https://raw.githubusercontent.com/DanielHafezi/StaffWorkloadManager/main/project_overview.png" 
                alt="Staff Workload Manager Screenshot" 
                className="w-full h-auto object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://raw.githubusercontent.com/DanielHafezi/StaffWorkloadManager/main/project_overview.png", "Staff Workload Manager Screenshot")}
              />
            </div>

            {/* Project 5 - ScholarshipScout */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
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
                  Available on GitHub
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="ScholarshipScout Web Scraper" 
                className="w-full h-64 object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", "ScholarshipScout Web Scraper")}
              />
            </div>

            {/* Project 6 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-bold text-blue-400">PremierPulse: Premier League Management and Reporting</h2>
                  <div className="relative ml-2 group">
                    <Info size={20} className="text-gray-400 hover:text-gray-300 cursor-help" />
                    <div className="absolute hidden group-hover:block bg-gray-700 text-sm text-gray-200 px-3 py-2 rounded-md z-10 w-64
                      md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2
                      left-auto right-0 top-full mt-1">
                      Final assignment of Web Development MSc module, A+
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  A comprehensive web application for Premier League information management and statistics reporting, developed as a final project for an Internet Programming module.
                </p>
                <p className="mb-4">
                  The system features responsive design with league management interfaces, top scorers tracking, and form handling capabilities for data collection and reporting in a clean, user-friendly layout.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies and libraries:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>HTML5: Structure and content</li>
                    <li>CSS3: Responsive styling</li>
                    <li>JavaScript: Interactive elements</li>
                    <li>JSON: Data storage and validation</li>
                    <li>PHP: Backend functionality</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <a 
                    href="https://github.com/danielhafezi/PremierPulse" 
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
                src="https://raw.githubusercontent.com/DanielHafezi/PremierPulse/master/project_overview.png" 
                alt="Premier Pulse Screenshot" 
                className="w-full h-auto object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://raw.githubusercontent.com/DanielHafezi/PremierPulse/master/project_overview.png", "Premier Pulse Screenshot")}
              />
            </div>

            {/* Project 7 - JobMatchCV */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
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
                  Available on GitHub
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="JobMatchCV Resume Optimizer" 
                className="w-full h-64 object-cover border-t border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", "JobMatchCV Resume Optimizer")}
              />
            </div>
          </div>

          {/* Right Column - About Me */}
          <div id="about" className="lg:w-1/3">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden sticky top-6">
              <img 
                src="./ProfilePicture.png" 
                alt="Daniel Hafezian" 
                className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("./ProfilePicture.png", "Daniel Hafezian")}
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
      
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeImageModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Daniel Hafezian. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/danielhafezi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:danielhafezian@gmail.com" className="text-gray-600 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
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