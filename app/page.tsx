"use client"; // Required for useState

import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import { ProjectCard } from "@/components/project-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, Phone, Briefcase, Filter } from "lucide-react";
import Link from "next/link";
import { projects, uniqueCategories } from "@/lib/projectsData"; // Import project data
import Typewriter from 'typewriter-effect';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [selectedCategory, setSelectedCategory] = useState("All"); // Changed default state

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  // Ensure featured projects are shown first while preserving grid/columns
  const sortedProjects = [...filteredProjects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative overflow-hidden">
        {/* Header animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.03),rgba(236,72,153,0.03),rgba(59,130,246,0.03))] animate-[gradient_8s_ease_infinite]" />
          <div className="absolute inset-0 opacity-[.04] bg-[linear-gradient(to_right,rgba(var(--foreground-rgb),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground-rgb),0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="container mx-auto px-4 py-4">
          <MainNav />
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        onMouseMove={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.setProperty('--mx', `${e.clientX}px`)
          target.style.setProperty('--my', `${e.clientY}px`)
        }}
        className="relative py-10 md:py-16 overflow-hidden"
      >
        {/* Enhanced background layers */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {/* Aurora / conic gradient — two-color palette to match profile photo (blue ↔ pink) */}
          <div className="absolute -inset-40 blur-3xl opacity-60 animate-[spin_25s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(59,130,246,0.28),_rgba(236,72,153,0.28),_rgba(59,130,246,0.28))]" />
          {/* Soft radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_60%,rgba(var(--foreground-rgb),0.05),transparent)]" />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[.08] bg-[linear-gradient(to_right,rgba(var(--foreground-rgb),0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground-rgb),0.25)_1px,transparent_1px)] bg-[size:44px_44px]" />
          {/* Grain / noise texture */}
          <div className="absolute inset-0 opacity-[.06] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'.35\'/></svg>')]" />
        </div>
        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light bg-[radial-gradient(240px_240px_at_var(--mx)_var(--my),rgba(255,255,255,0.18),transparent_60%)] dark:bg-[radial-gradient(240px_240px_at_var(--mx)_var(--my),rgba(255,255,255,0.08),transparent_60%)]"
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-md">
            <h1 className="inline-block text-3xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Daniel Hafezian
            </h1>
            <div className="text-base md:text-xl text-muted-foreground font-light mb-4">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'Specializing in AI & GenAI-infused applications',
                    'Building with modern AI integration techniques'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow relative">
        {/* Main content subtle background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Projects */}
          <div className="col-span-1 lg:col-span-2 space-y-6 relative">
            {/* Projects section background */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-pink-500/[0.02]" />
              <div className="absolute inset-0 opacity-[.02] bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.3),transparent_50%)]" />
            </div>
            
            <div className="flex justify-between items-center border-b pb-2">
              <h2 id="projects" className="text-2xl font-bold scroll-m-20">Projects</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    {selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    {uniqueCategories.map((category) => (
                      <DropdownMenuRadioItem key={category} value={category}>
                        {category}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {sortedProjects.map((project) => (
                <ProjectCard 
                  key={project.title} // Add key for list rendering
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  links={project.links}
                  image={project.image}
                  infoTooltip={project.infoTooltip}
                  featured={project.featured}
                  // Optionally pass categories to display on card
                  // categories={project.categories} 
                />
              ))}
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="col-span-1 relative">
            <div id="about" className="sticky top-24">
              <h2 className="text-2xl font-bold border-b pb-2 mb-6 scroll-m-20 lg:block hidden">About Me</h2>
              <Card className="overflow-hidden relative group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1
                bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-xl
                border border-white/10 dark:border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.24)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                hover:bg-white/[0.04] dark:hover:bg-white/[0.04]
                hover:border-white/20 dark:hover:border-white/20">
                
                {/* Liquid glassy background effects */}
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  {/* Base glass gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-pink-500/[0.04] opacity-70" />
                  
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1200 ease-out" />
                  </div>
                  
                  {/* Floating glass orbs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-conic from-blue-500/8 via-pink-500/6 to-blue-500/8 rounded-full blur-2xl animate-[spin_25s_linear_infinite]" />
                  <div className="absolute bottom-1/4 left-0 w-20 h-20 bg-gradient-radial from-pink-400/10 to-transparent rounded-full blur-xl opacity-60 animate-pulse" />
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-radial from-blue-400/8 to-transparent rounded-full blur-lg opacity-80" />
                  
                  {/* Glass texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.6),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.4),transparent_50%)] mix-blend-overlay" />
                  
                  {/* Subtle grid pattern for glass texture */}
                  <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                <div className="relative">
                  <img 
                    src="/ProfilePicture.png" 
                    alt="Daniel Hafezian" 
                    className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glass overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Hi, I'm Daniel Hafezian. I'm a full-stack developer specializing in rapid web and AI application deployment using modern AI-first tools.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Toolset</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm font-medium mb-1.5">Frontend:</div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">React</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Next.js</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Shadcn UI</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">TypeScript</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Framer Motion</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Tailwind CSS</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1.5">Backend:</div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Node.js</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">FastAPI</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">RESTful APIs</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">PostgreSQL</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1.5">AI & ML:</div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Python</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">LLM APIs</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Chatbots</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Fine-tuning</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">RAG</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">LangChain</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">TensorFlow</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1.5">Cloud:</div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Azure</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">Docker</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">GitHub Actions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Professional Experience</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <Briefcase size={16} className="text-blue-400 mr-2 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Full Stack Developer, Bahamta</p>
                          <p className="text-xs text-muted-foreground">September 2021 - February 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Briefcase size={16} className="text-blue-400 mr-2 mt-1 shrink-0" />
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
                        <Mail size={16} className="text-blue-400 mr-2 shrink-0" />
                        <a href="mailto:danielhafezian@gmail.com" className="hover:text-blue-400 transition-colors">danielhafezian@gmail.com</a>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-blue-400 mr-2 shrink-0" />
                        <span className="text-muted-foreground">(+44) 749 749 8257</span>
                      </div>
                      <div className="flex items-center">
                        <Github size={16} className="text-blue-400 mr-2 shrink-0" />
                        <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
                      </div>
                      <div className="flex items-center">
                        <Linkedin size={16} className="text-blue-400 mr-2 shrink-0" />
                        <a href="https://www.linkedin.com/in/danielhafezi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
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
      <footer className="border-t py-6 md:py-0 relative overflow-hidden">
        {/* Footer animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/[0.02] to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:h-16">
            <p className="text-sm text-muted-foreground">© {currentYear} Daniel Hafezian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
