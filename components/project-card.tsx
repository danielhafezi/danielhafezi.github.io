"use client"

import { useState } from "react"
import { ExternalLink, Github, Globe, Star } from "lucide-react"
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
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  links, 
  image,
  infoTooltip,
  featured = false
}: ProjectCardProps) {
  const [modalImage, setModalImage] = useState({ isOpen: false, src: "", alt: "" })

  const openImageModal = (src: string, alt: string) => {
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
          <span className="text-xs leading-none dark:text-white text-black">🤗</span>
        </span>
      )
    }
    return <ExternalLink size={14} className="mr-1" />
  }

  return (
    <>
      <Card
        className={cn(
          "relative overflow-hidden h-full flex flex-col transition-all duration-500 group",
          "bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-xl",
          "border border-white/10 dark:border-white/10",
          "shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.24)]",
          "hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
          "hover:bg-white/[0.04] dark:hover:bg-white/[0.04]",
          "hover:border-white/20 dark:hover:border-white/20",
          "hover:scale-[1.02] hover:-translate-y-2",
          featured
            ? "ring-1 ring-blue-400/20 dark:ring-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            : ""
        )}
      >
        {/* Liquid glassy background effects */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {/* Base glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-pink-500/[0.03] opacity-60" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
          </div>
          
          {/* Floating glass orbs */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-pink-400/8 to-transparent rounded-full blur-2xl opacity-70" />
          
          {/* Glass texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] mix-blend-overlay" />
        </div>
        
        {featured && (
          <div
            className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-medium 
            border-blue-400/30 bg-blue-500/10 backdrop-blur-xl text-blue-400 shadow-lg"
            aria-label="Featured project"
          >
            <Star size={10} className="text-blue-400 animate-pulse fill-current" />
            Featured
          </div>
        )}
        
        {/* Image now at the top */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-48 object-cover cursor-pointer hover:scale-110 transition-transform duration-700"
            onClick={() => openImageModal(image.src, image.alt)}
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-semibold">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pb-4 flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-3 text-sm">
              {paragraph}
            </p>
          ))}
          
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Technologies:</h3>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-0.5 text-xs bg-white/10 text-foreground border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-wrap justify-start gap-2 pt-4">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-foreground border border-white/20 hover:border-white/40 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {getLinkIcon(link.text)}
              {link.text}
            </Link>
          ))}
        </CardFooter>
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