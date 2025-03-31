// lib/projectsData.ts

export interface Project {
  title: string;
  description: string[];
  technologies: { name: string }[];
  links: { text: string; url: string }[];
  image: { src: string; alt: string };
  infoTooltip?: string;
  categories: string[]; // Added categories field
}

export const projects: Project[] = [
  // IMID Patient Clusters Visualization Dashboard Project
  { 
    title: "IMID Patient Clusters Visualization Dashboard",
    description: [
      "An interactive web-based visualization dashboard demonstrating patient clustering from synthetic EHR data (Synthea™) for Immune-Mediated Inflammatory Diseases (IMIDs).",
      "Leverages K-Means/DBSCAN clustering and AI-generated summaries (Google Gemini) to provide insights into patient groups based on age, condition count, and medication count."
    ],
    technologies: [
      { name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }, { name: "Prisma" }, 
      { name: "SQLite" }, { name: "Python" }, { name: "Pandas" }, { name: "Scikit-learn" }, 
      { name: "Google Gemini API" }, { name: "Recharts" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/imid-cluster-dashboard" }
    ],
    image: {
      src: "/IMID.gif",
      alt: "IMID Patient Clusters Visualization Dashboard Demo"
    },
    categories: ["AI & Machine Learning", "Health Tech", "Data Visualization & Analytics", "Web Applications & Platforms"]
  },

  // Interactive Policy Explorer Project
  { 
    title: "Interactive Policy Explorer: Economic Policy Simulation",
    description: [
      "A Next.js application that demonstrates the capabilities of Large Language Models (specifically Google's Gemini Flash 2) in economic policy simulation.",
      "This tool allows users to explore how various economic and technological transition policies might impact different socio-economic groups through an intuitive visual interface with customizable policy configurations, socio-economic group selection, and interactive visualizations."
    ],
    technologies: [
      { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, 
      { name: "Google Gemini API" }, { name: "D3.js" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/InteractivePolicyExplorer" }
    ],
    image: {
      src: "/InteractivePolicyExplorer.gif",
      alt: "Interactive Policy Explorer Demo"
    },
    categories: ["AI & Machine Learning", "Data Visualization & Analytics", "Web Applications & Platforms"]
  },
  
  // PerspectiView Project
  { 
    title: "PerspectiView: Transform Narratives Into Perspectives",
    description: [
      "A web application that transforms third-person narratives into multiple first-person perspectives, helping users understand how different characters experience the same events in stories.",
      "Using Google's Gemini 2.0 Flash model for analysis, the application automatically identifies characters, generates perspective-based retellings, and creates visual timelines showing emotional and perceptual variations across characters."
    ],
    technologies: [
      { name: "Next.js" }, { name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, 
      { name: "Chart.js" }, { name: "Google Gemini API" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/perspectiview" }
    ],
    image: {
      src: "/PerspectiView.gif",
      alt: "PerspectiView Demonstration"
    },
    categories: ["AI & Machine Learning", "Data Visualization & Analytics", "Web Applications & Platforms"]
  },

  // EHR Explorer Project
  { 
    title: "EHR Explorer: Patient Medication Analysis Tool",
    description: [
      "Processes longitudinal Electronic Health Record (EHR) data from synthetic patients to deliver AI-powered insights into medication patterns and health trends.",
      "The tool enables healthcare professionals to track medication effectiveness, identify potential interactions, and visualize patient health trajectories over time. Users can explore comprehensive cross-analyses of conditions and medications through an intuitive interface designed to surface meaningful patterns in complex healthcare data."
    ],
    technologies: [
      { name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }, 
      { name: "SQLite" }, { name: "Google Gemini API" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/EHR-Explorer" }
    ],
    image: {
      src: "/EHR.gif",
      alt: "EHR Explorer Demo"
    },
    categories: ["AI & Machine Learning", "Health Tech", "Data Visualization & Analytics", "Web Applications & Platforms"]
  },

  // JustBYOK Project
  { 
    title: "JustBYOK: Bring Your Own Key AI Chat Platform",
    description: [
      "A privacy-focused LLM chat interface where you control your data. All conversations and API keys remain stored locally on your device.",
      "JustBYOK supports multiple LLM providers including OpenAI, Anthropic, and Google with full parameter control, conversation organization, and a clean, intuitive interface."
    ],
    technologies: [
      { name: "Next.js" }, { name: "React" }, { name: "AI SDK" }, { name: "TypeScript" }, 
      { name: "Tailwind CSS" }, { name: "IndexedDB" }, { name: "LocalStorage" }
    ],
    links: [
      { text: "Website", url: "https://justbyok.com" }
    ],
    image: {
      src: "/JustBYOK.png",
      alt: "JustBYOK AI Chat Platform"
    },
    categories: ["AI & Machine Learning", "Web Applications & Platforms"]
  },

  // EssayEvaluator Project
  { 
    title: "EssayEvaluator: Automated Essay Scoring",
    description: [
      "State-of-the-Art Automated Essay Scoring system using a 3.8B parameter language model that outperforms larger commercial models.",
      "This AI model provides accurate scoring for academic essays, matching industry standards with a QWK of 0.82. The system reduces error rates by nearly 65% compared to baseline models while offering a 99.99% cost reduction compared to commercial alternatives."
    ],
    technologies: [
      { name: "PyTorch" }, { name: "Hugging Face" }, { name: "NLTK" }, { name: "spaCy" }, 
      { name: "NumPy" }, { name: "Pandas" }
    ],
    links: [
      { text: "Hugging Face", url: "https://huggingface.co/DanielHafezi/essayevaluator" },
      { text: "GitHub", url: "https://github.com/danielhafezi/EssayEvaluator" }
    ],
    image: {
      src: "/EssayEvaluator.png",
      alt: "Essay Evaluator Overview"
    },
    categories: ["AI & Machine Learning", "Education Tech"]
  },

  // BetaAnalysisTool Project
  { 
    title: "BetaAnalysisTool: Crypto Market Analytics",
    description: [
      "A multi-stack application designed to analyze crypto market data and calculate beta values for digital assets.",
      "The tool provides interactive dashboards for crypto market analysis with beta pattern tracking, helping traders identify risk profiles across various digital assets."
    ],
    technologies: [
      { name: "Python" }, { name: "React" }, { name: "Pandas" }, { name: "NumPy" }, 
      { name: "Streamlit" }, { name: "Plotly" }, { name: "CCXT" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/BetaAnalysisTool" }
    ],
    image: {
      src: "https://raw.githubusercontent.com/DanielHafezi/BetaAnalysisTool/main/ticker_analysis.png",
      alt: "Market Analysis Dashboard"
    },
    categories: ["Data Visualization & Analytics", "Developer Tools / Automation"]
  },

  // GradPathAI Project
  { 
    title: "GradPathAI: University Application Assistant",
    description: [
      "AI-powered tools to assist students with university applications, built and launched as the founder.",
      "GradPathAI delivers personalized recommendations through multi-agent AI systems, helping students navigate the complex university application process with confidence."
    ],
    technologies: [
      { name: "Next.js" }, { name: "TypeScript" }, { name: "LangChain JS" }, 
      { name: "LangGraph JS" }, { name: "Azure" }
    ],
    links: [
      { text: "Website", url: "https://gradpathai.com" }
    ],
    image: {
      src: "/GradPathAI.png",
      alt: "GradPathAI Landing Page"
    },
    categories: ["AI & Machine Learning", "Web Applications & Platforms", "Education Tech"]
  },
  
  // StaffWorkloadManager Project
  { 
    title: "StaffWorkloadManager: Academic Workload Management",
    description: [
      "A JavaFX application for managing and calculating staff workloads in academic settings, ensuring compliance with contractual obligations and custom-defined activity rules."
    ],
    technologies: [
      { name: "Java" }, { name: "JavaFX" }, { name: "Serialization" }, { name: "JUnit" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/StaffWorkloadManager" }
    ],
    image: {
      src: "https://raw.githubusercontent.com/DanielHafezi/StaffWorkloadManager/main/project_overview.png",
      alt: "Staff Workload Manager Screenshot"
    },
    infoTooltip: "Final assignment of Visual Object Software MSc module, A+",
    categories: ["Education Tech", "Desktop Applications"]
  },

  // ScholarshipScout Project
  { 
    title: "ScholarshipScout: Multi-Agent AI Web Scraper",
    description: [
      "Multi-Agent AI based web scraper designed to search for fully funded doctorate positions from popular academic position websites.",
      "Helps users find PhD opportunities by scraping data from websites like ScholarshipDB and FindAPhD, filtering positions based on desired countries and saving results in multiple formats."
    ],
    technologies: [
      { name: "Python" }, { name: "AutoGen" }, { name: "BeautifulSoup" }, { name: "HTTPX" }, 
      { name: "Pandas" }, { name: "Asyncio" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/DanielHafezi/ScholarshipScout" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "ScholarshipScout Web Scraper"
    },
    categories: ["AI & Machine Learning", "Developer Tools / Automation"]
  },

  // PremierPulse Project
  { 
    title: "PremierPulse: Premier League Management and Reporting",
    description: [
      "A comprehensive web application for Premier League information management and statistics reporting, developed as a final project for an Internet Programming module."
    ],
    technologies: [
      { name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "JSON" }, { name: "PHP" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/danielhafezi/PremierPulse" }
    ],
    image: {
      src: "https://raw.githubusercontent.com/DanielHafezi/PremierPulse/master/project_overview.png",
      alt: "Premier Pulse Screenshot"
    },
    infoTooltip: "Final assignment of Web Development MSc module, A+",
    categories: ["Web Applications & Platforms"]
  },

  // JobMatchCV Project
  { 
    title: "JobMatchCV: AI-Powered Resume Optimizer",
    description: [
      "An innovative multi-agent system that leverages the AutoGen framework to enhance CVs based on specific job advertisements.",
      "This system analyzes both the CV and job requirements, generates tailored enhancement suggestions, and converts the improved CV to a professional markdown format."
    ],
    technologies: [
      { name: "Python" }, { name: "AutoGen" }, { name: "PyPDF2" }, { name: "python-docx" }, 
      { name: "BeautifulSoup" }, { name: "Markdown" }
    ],
    links: [
      { text: "GitHub", url: "https://github.com/DanielHafezi/JobMatchCV" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "JobMatchCV Resume Optimizer"
    },
    categories: ["AI & Machine Learning", "Developer Tools / Automation"]
  }
];

// Extract unique categories for the filter dropdown
export const uniqueCategories = ["All Projects", ...Array.from(new Set(projects.flatMap(p => p.categories)))];
