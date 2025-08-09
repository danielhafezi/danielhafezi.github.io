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
          "relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group",
          featured
            ? "border-0 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md bg-gradient-to-br from-white/60 to-white/30 dark:from-white/[0.08] dark:to-white/[0.02] shadow-[0_15px_35px_rgba(17,24,39,0.08)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            : "border-border"
        )}
      >
        {/* Enhanced card background effects */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-pink-500/[0.02]" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-pink-500/5 to-transparent rounded-full blur-xl" />
        </div>
        
        {featured && (
          <div
            className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium
            bg-white/70 dark:bg-black/60 bg-gradient-to-r from-blue-500/20 to-pink-500/20
            text-black dark:text-white supports-[backdrop-filter]:backdrop-blur-md backdrop-saturate-150
            ring-1 ring-black/10 dark:ring-white/15 shadow-[0_4px_18px_rgba(0,0,0,0.25)]"
            aria-label="Featured project"
          >
            <Star size={12} className="text-black dark:text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] animate-pulse" />
            Featured
          </div>
        )}
        {/* Image now at the top */}
        <div className="relative overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openImageModal(image.src, image.alt)}
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
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
                  className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200 border border-border rounded-sm"
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
              className="inline-flex items-center px-2.5 py-0.5 text-xs bg-gradient-to-r from-blue-500/10 to-pink-500/10 text-primary border border-primary/20 rounded-sm hover:from-blue-500/20 hover:to-pink-500/20 hover:border-primary/40 transition-all duration-200 backdrop-blur-sm"
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