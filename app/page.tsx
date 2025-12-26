"use client"; // Required for useState

import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, Briefcase, Filter, Download } from "lucide-react";
import { projects, uniqueCategories, timelineAnnotations } from "@/lib/projectsData"; // Import project data
import Typewriter from 'typewriter-effect';
import { BackToTop } from "@/components/back-to-top";
import { useDrawOnScroll } from "@/hooks/use-draw-on-scroll";
import { annotationDoodles } from "@/components/hand-drawn-doodles";

// Hand-drawn curvy arrow SVG - pointing right (swooping down then right)
// Path length approximately 220 units
function HandDrawnArrowRight() {
  const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

  return (
    <svg
      ref={ref}
      className={`w-32 h-40 text-red-500 flex-shrink-0 svg-draw-arrow ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
      style={{ '--path-length': '250' } as React.CSSProperties}
      viewBox="0 0 120 150"
      fill="none"
    >
      <path
        d="M15 10 C25 15, 35 25, 40 45 C45 65, 55 85, 70 100 C85 115, 95 120, 110 125"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrow head - filled triangle */}
      <path
        d="M110 125 L95 105 L85 125 Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Hand-drawn curvy arrow SVG - pointing left (swooping down then left)
// Path length approximately 220 units
function HandDrawnArrowLeft() {
  const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

  return (
    <svg
      ref={ref}
      className={`w-32 h-40 text-red-500 flex-shrink-0 svg-draw-arrow ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
      style={{ '--path-length': '250' } as React.CSSProperties}
      viewBox="0 0 120 150"
      fill="none"
    >
      <path
        d="M105 10 C95 15, 85 25, 80 45 C75 65, 65 85, 50 100 C35 115, 25 120, 10 125"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrow head - filled triangle */}
      <path
        d="M10 125 L25 105 L35 125 Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Hand-drawn curly bracket - opening { (curves inward from left)
// Path length approximately 350 units
function HandDrawnBracketOpen() {
  const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.3 });

  return (
    <svg
      ref={ref}
      className={`text-red-500 flex-shrink-0 h-full min-h-[200px] svg-draw-bracket ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
      style={{ '--path-length': '400' } as React.CSSProperties}
      width="50"
      viewBox="0 0 50 200"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M45 5 C30 10, 25 20, 25 60 C25 80, 15 90, 5 100 C15 110, 25 120, 25 140 C25 180, 30 190, 45 195"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn curly bracket - closing } (curves inward from right)
// Path length approximately 350 units
function HandDrawnBracketClose() {
  const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.3 });

  return (
    <svg
      ref={ref}
      className={`text-red-500 flex-shrink-0 h-full min-h-[200px] svg-draw-bracket ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
      style={{ '--path-length': '400' } as React.CSSProperties}
      width="50"
      viewBox="0 0 50 200"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M5 5 C20 10, 25 20, 25 60 C25 80, 35 90, 45 100 C35 110, 25 120, 25 140 C25 180, 20 190, 5 195"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [selectedCategory, setSelectedCategory] = useState("All"); // Changed default state
  const [scrollY, setScrollY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const orbContainerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect for background orbs
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // Scroll handler with requestAnimationFrame for smooth performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Calculate parallax transforms - orbs move slower than content
  // Different speeds create depth variation (slower = appears further back)
  const getParallaxStyle = (speed: number): React.CSSProperties => {
    // Disable parallax on mobile (< 768px) or if reduced motion is preferred
    if (isReducedMotion || (typeof window !== 'undefined' && window.innerWidth < 768)) {
      return {};
    }
    return {
      transform: `translateY(${scrollY * speed}px)`,
      willChange: 'transform',
    };
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  // Ensure featured projects are shown first while preserving grid/columns
  const sortedProjects = [...filteredProjects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <div className="min-h-screen flex flex-col bg-[#171717] text-white">

      {/* Main Content - Combined Layout */}
      <main
        className="container mx-auto px-4 py-12 lg:py-16 flex-grow relative"
        onMouseMove={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.setProperty('--mx', `${e.clientX}px`)
          target.style.setProperty('--my', `${e.clientY}px`)
        }}
      >
        {/* Enhanced Background effects - More vibrant */}
        <div ref={orbContainerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Primary aurora effect - larger and more colorful */}
          {/* Slowest parallax (0.15x) - appears furthest back */}
          <div
            className="absolute -inset-[200px] blur-[100px] opacity-50 animate-[spin_30s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(127,29,29,0.4),_rgba(185,28,28,0.35),_rgba(23,23,23,0.5),_rgba(127,29,29,0.4))]"
            style={getParallaxStyle(0.15)}
          />

          {/* Floating orbs - warm red/orange with parallax effect */}
          {/* Different parallax speeds create depth layering */}
          <div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#991b1b]/15 rounded-full blur-[80px] animate-[float_15s_ease-in-out_infinite]"
            style={getParallaxStyle(0.3)}
          />
          <div
            className="absolute top-1/2 -right-20 w-80 h-80 bg-[#b91c1c]/12 rounded-full blur-[80px] animate-[float_20s_ease-in-out_infinite_reverse]"
            style={getParallaxStyle(0.4)}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#7f1d1d]/15 rounded-full blur-[80px] animate-[float_25s_ease-in-out_infinite]"
            style={getParallaxStyle(0.35)}
          />

          {/* Subtle grid pattern - slight parallax for depth */}
          <div
            className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"
            style={getParallaxStyle(0.1)}
          />

          {/* Noise texture overlay - no parallax, stays fixed */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
        </div>

        {/* Cursor spotlight - red/orange */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(400px_400px_at_var(--mx)_var(--my),rgba(185,28,28,0.1),rgba(220,38,38,0.06),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Combined Hero + About Me (Sidebar) */}
          <div className="col-span-1 lg:col-span-4 relative order-1 lg:order-1">
            <div id="about" className="lg:sticky lg:top-12 space-y-8">
              {/* Hero info integrated into sidebar */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f87171]/80 font-medium">About Me</p>

                {/* Profile Picture */}
                <div className="flex justify-start mb-2">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#991b1b] to-[#dc2626] rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    {/* Image container */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
                      <img
                        src="/ProfilePicture.webp"
                        alt="Daniel Hafezi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">Daniel</span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dc2626] to-[#f87171]">Hafezi</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-white/90">
                  Full Stack Developer
                </h2>
                <div className="text-base text-white/50 font-light h-10">
                  <Typewriter
                    options={{
                      strings: [
                        'Specializing in AI & GenAI-infused apps',
                        'Building with modern AI integration techniques',
                        'Rapid web and AI application deployment'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </div>

                {/* About description - moved inside for tighter spacing */}
                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08]">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Crafting seamless digital experiences with expertise in front-end magic and back-end architecture. Passionate about clean code, scalable systems, and user-centric design.
                  </p>
                </div>
              </div>

              {/* Toolset - Enhanced badges */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'FastAPI'].map((tech) => (
                    <span key={tech} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/[0.05] text-white/70 border border-white/[0.1] rounded-full hover:bg-[#991b1b]/15 hover:border-[#b91c1c]/30 hover:text-white transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links - Glowing icons with red accent */}
              <div className="flex items-center gap-5">
                <a href="mailto:me@dhafezi.com" className="group relative" aria-label="Email">
                  <div className="absolute inset-0 bg-[#b91c1c]/25 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail size={22} className="relative text-white/50 group-hover:text-[#f87171] transition-colors duration-300" />
                </a>
                <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="GitHub">
                  <div className="absolute inset-0 bg-[#dc2626]/25 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Github size={22} className="relative text-white/50 group-hover:text-[#f87171] transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/dhafezi/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="LinkedIn">
                  <div className="absolute inset-0 bg-[#dc2626]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Linkedin size={22} className="relative text-white/50 group-hover:text-[#f87171] transition-colors duration-300" />
                </a>
              </div>

              {/* Professional Experience - Enhanced */}
              <div className="hidden lg:block pt-6 border-t border-white/[0.08]">
                <h3 className="font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b91c1c] to-[#ef4444] mt-2 mr-3 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-sm text-white/80">Full Stack Developer, Bahamta</p>
                      <p className="text-xs text-white/40">Sep 2021 - Feb 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#991b1b] to-[#dc2626] mt-2 mr-3 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-sm text-white/80">Python Developer, Fandogh PaaS</p>
                      <p className="text-xs text-white/40">Oct 2020 - Aug 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Projects with Timeline */}
          <div className="col-span-1 lg:col-span-8 space-y-8 relative order-2 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f87171]/80 font-medium mb-2">Projects</p>

            {/* Two-Column Projects Grid with Timeline */}
            <div className="relative">
              {/* Center Timeline Line (Desktop) - Red to orange gradient */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-b from-[#b91c1c]/50 via-[#dc2626]/40 to-[#991b1b]/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/25 via-[#b91c1c]/20 to-transparent blur-sm" />
              </div>

              {/* Left Timeline Line (Mobile) - Red to orange gradient */}
              <div className="absolute left-[23px] top-0 bottom-0 w-[2px] md:hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-b from-[#b91c1c]/50 via-[#dc2626]/40 to-[#991b1b]/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/25 via-[#b91c1c]/20 to-transparent blur-sm" />
              </div>

              {/* Render annotations with their projects */}
              <div className="space-y-8 md:space-y-12">
                {timelineAnnotations.map((annotation, annotationIndex) => {
                  const annotationProjects = annotation.projectTitles
                    .map(title => projects.find(p => p.title === title))
                    .filter(Boolean);

                  return (
                    <div key={annotationIndex} className="relative">
                      {/* Mobile Annotation - Handwritten Note Style */}
                      <div className="md:hidden pl-12 mb-3 flex items-center gap-2">
                        <span className="text-red-500/60">~</span>
                        <span className="font-handwriting text-lg text-red-500/80">
                          {annotation.text}
                        </span>
                      </div>

                      {/* Grid container for this annotation group */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
                        {/* Left Column */}
                        <div className={`${annotation.side === 'left' ? 'space-y-6' : 'hidden md:flex md:items-center md:justify-end'}`}>
                          {annotation.side === 'left' ? (
                            // Projects on left
                            annotationProjects.map((project, idx) => project && (
                              <div key={project.title} className="timeline-item relative pl-12 md:pl-0">
                                {/* Timeline Dot - Desktop (Right) */}
                                <div className="hidden md:block absolute top-8 -right-[14px] w-3 h-3 rounded-full z-10" aria-hidden="true">
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626]" />
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626] blur-sm opacity-60" />
                                </div>
                                {/* Timeline Dot - Mobile (Left) */}
                                <div className="md:hidden absolute top-8 left-[18px] w-3 h-3 rounded-full z-10" aria-hidden="true">
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626]" />
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626] blur-sm opacity-60" />
                                </div>
                                <ProjectCard
                                  title={project.title}
                                  description={project.description}
                                  technologies={project.technologies}
                                  links={project.links}
                                  image={project.image}
                                  infoTooltip={project.infoTooltip}
                                  featured={project.featured}
                                  collapsible={true}
                                />
                              </div>
                            ))
                          ) : (
                            // Annotation on left - MUCH LARGER with doodle
                            <div className="relative flex items-stretch justify-end h-full w-full py-4 pr-4">
                              {/* Doodle illustration */}
                              {(() => {
                                const DoodleComponent = annotationDoodles[annotationIndex];
                                return DoodleComponent ? (
                                  <div className="absolute top-4 left-4 opacity-60 doodle-float">
                                    <DoodleComponent className="w-16 h-16 md:w-20 md:h-20" />
                                  </div>
                                ) : null;
                              })()}
                              <div className="relative z-10 flex items-center gap-2 h-full">
                                <span className={`font-handwriting text-3xl md:text-4xl text-red-500 text-right leading-snug max-w-[280px] self-center ${annotation.type === 'arrow' ? 'mb-24' : ''}`}>
                                  {annotation.text}
                                </span>
                                {annotation.type === 'arrow' ? (
                                  <HandDrawnArrowRight />
                                ) : (
                                  <HandDrawnBracketOpen />
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className={`${annotation.side === 'right' ? 'space-y-6' : 'hidden md:flex md:items-center md:justify-start'}`}>
                          {annotation.side === 'right' ? (
                            // Projects on right
                            annotationProjects.map((project, idx) => project && (
                              <div key={project.title} className="timeline-item relative pl-12 md:pl-0">
                                {/* Timeline Dot - Desktop (Left) */}
                                <div className="hidden md:block absolute top-8 -left-[14px] w-3 h-3 rounded-full z-10" aria-hidden="true">
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626]" />
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626] blur-sm opacity-60" />
                                </div>
                                {/* Timeline Dot - Mobile (Left) */}
                                <div className="md:hidden absolute top-8 left-[18px] w-3 h-3 rounded-full z-10" aria-hidden="true">
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626]" />
                                  <div className="absolute inset-0 rounded-full bg-[#dc2626] blur-sm opacity-60" />
                                </div>
                                <ProjectCard
                                  title={project.title}
                                  description={project.description}
                                  technologies={project.technologies}
                                  links={project.links}
                                  image={project.image}
                                  infoTooltip={project.infoTooltip}
                                  featured={project.featured}
                                  collapsible={true}
                                />
                              </div>
                            ))
                          ) : (
                            // Annotation on right - MUCH LARGER with doodle
                            <div className="relative flex items-stretch justify-start h-full w-full py-4 pl-4">
                              {/* Doodle illustration */}
                              {(() => {
                                const DoodleComponent = annotationDoodles[annotationIndex];
                                return DoodleComponent ? (
                                  <div className="absolute top-4 right-4 opacity-60 doodle-float">
                                    <DoodleComponent className="w-16 h-16 md:w-20 md:h-20" />
                                  </div>
                                ) : null;
                              })()}
                              <div className="relative z-10 flex items-center gap-2 h-full">
                                {annotation.type === 'arrow' ? (
                                  <HandDrawnArrowLeft />
                                ) : (
                                  <HandDrawnBracketClose />
                                )}
                                <span className={`font-handwriting text-3xl md:text-4xl text-red-500 text-left leading-snug max-w-[280px] self-center ${annotation.type === 'arrow' ? 'mb-24' : ''}`}>
                                  {annotation.text}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Minimal */}
      <footer className="border-t border-white/[0.05] py-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/30">© {currentYear} Daniel Hafezi. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="mailto:me@dhafezi.com" className="text-white/30 hover:text-white/60 transition-colors text-sm">Contact</a>
              <a href="https://github.com/DanielHafezi" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/dhafezi/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
