"use client"

import { useState, useRef } from "react"
import { ExternalLink, Github, Globe, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageModal } from "@/components/image-modal"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Technology {
  name: string
}

interface ProjectLink {
  text: string
  url: string
}

interface ProjectCardProps {
  title: string
  description: string[]
  technologies: Technology[]
  links: ProjectLink[]
  image: {
    src: string
    alt: string
  }
  infoTooltip?: string
  featured?: boolean
  collapsible?: boolean
}

export function ProjectCard({
  title,
  description,
  technologies,
  links,
  image,
  infoTooltip,
  featured = false,
  collapsible = false
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [modalImage, setModalImage] = useState({ isOpen: false, src: "", alt: "" })
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
    cardRef.current.style.setProperty("--spotlight-opacity", "1")
    // Add dynamic glow shadow that follows cursor
    cardRef.current.style.setProperty("--glow-x", `${x - rect.width / 2}px`)
    cardRef.current.style.setProperty("--glow-y", `${y - rect.height / 2}px`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty("--spotlight-opacity", "0")
    cardRef.current.style.removeProperty("--glow-x")
    cardRef.current.style.removeProperty("--glow-y")
  }

  const openImageModal = (e: React.MouseEvent, src: string, alt: string) => {
    e.stopPropagation()
    setModalImage({ isOpen: true, src, alt })
  }

  const closeImageModal = () => {
    setModalImage({ isOpen: false, src: "", alt: "" })
  }

  // Helper function to determine which icon to use based on link text
  const getLinkIcon = (text: string) => {
    const lowerText = text.toLowerCase()
    if (lowerText === "github") return <Github size={14} className="mr-1" />
    if (lowerText === "website") return <Globe size={14} className="mr-1" />
    if (lowerText === "hugging face") {
      return (
        <span className="mr-1 flex items-center justify-center w-3.5 h-3.5">
          <span className="text-xs leading-none text-foreground">🤗</span>
        </span>
      )
    }
    return <ExternalLink size={14} className="mr-1" />
  }

  return (
    <>
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleExpanded}
        className={cn(
          "relative overflow-hidden h-full flex flex-col transition-all duration-300 group",
          "bg-[#1f1f1f] border-0", // Removed default border
          "hover:shadow-[0_0_60px_rgba(251,146,60,0.25),0_0_30px_rgba(239,68,68,0.2)]",
          featured && "ring-0", // Removed default ring
          collapsible && "cursor-pointer md:cursor-default"
        )}
      >
        {/* Spotlight Gradient Border - Enhanced for visibility */}
        <div
          className="hidden md:block absolute inset-0 z-10 rounded-lg pointer-events-none transition-opacity duration-300"
          style={{
            opacity: "var(--spotlight-opacity, 0)",
            background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(251, 146, 60, 1), rgba(249, 115, 22, 0.8), rgba(239, 68, 68, 0.6), transparent 50%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "3px",
          }}
        />

        {/* Glow effect that follows cursor */}
        <div
          className="hidden md:block absolute inset-0 z-[5] rounded-lg pointer-events-none transition-opacity duration-300"
          style={{
            opacity: "var(--spotlight-opacity, 0)",
            background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(251, 146, 60, 0.15), rgba(239, 68, 68, 0.08), transparent 60%)",
          }}
        />

        {/* Sketchy Border Container */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none z-20 rounded-lg border-2 transition-colors duration-300",
            "border-[#333]/60 group-hover:border-[#dc2626]/60",
            featured && "border-[#dc2626]/40"
          )}
          style={{ filter: 'url(#rough-border)' }}
        />

        {/* Enhanced card background effects with red/orange */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/[0.06] via-transparent to-[#f97316]/[0.04]" />
        </div>

        {featured && (
          <div
            className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium
            bg-gradient-to-r from-[#dc2626]/25 to-[#f97316]/20 backdrop-blur-sm
            text-white/90 border border-[#dc2626]/30"
            aria-label="Featured project"
          >
            <Star size={12} className="text-[#f97316] animate-pulse" />
            Featured
          </div>
        )}
        {/* Image now at the top */}
        <div className="relative overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={(e) => openImageModal(e, image.src, image.alt)}
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-60" />
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg text-white/90 font-sans font-semibold">{title}</CardTitle>
            {collapsible && (
              <div className="md:hidden text-white/50 mt-1">
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            )}
          </div>
          {collapsible && !isExpanded && (
            <p className="text-xs text-white/40 md:hidden mt-1">Tap to expand</p>
          )}
        </CardHeader>

        <div className={cn(
          "flex flex-col flex-grow transition-all duration-300 ease-in-out overflow-hidden",
          collapsible && !isExpanded ? "max-h-0 opacity-0 md:max-h-none md:opacity-100" : "max-h-[2000px] opacity-100"
        )}>
          <CardContent className="pb-4 flex-grow">
            {description.map((paragraph, index) => (
              <p key={index} className="text-white/50 mb-3 text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-4">
              <h3 className="text-xs font-medium mb-2 text-white/40 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 text-xs bg-white/[0.05] text-white/60 border border-white/[0.08] rounded-full"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap justify-start gap-2 pt-4 border-t border-white/[0.05]">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center px-3 py-1 text-xs bg-white/[0.03] text-white/70 border border-white/[0.1] rounded-full hover:bg-[#dc2626]/10 hover:text-white hover:border-[#dc2626]/30 transition-all duration-200"
              >
                {getLinkIcon(link.text)}
                {link.text}
              </Link>
            ))}
          </CardFooter>
        </div>
      </Card>

      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeImageModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
    </>
  )
}
