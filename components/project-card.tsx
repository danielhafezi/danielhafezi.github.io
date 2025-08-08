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
          "relative overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]",
          featured
            ? "border-primary/30 ring-1 ring-primary/10 shadow-[0_10px_20px_rgba(17,24,39,0.06)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            : "border-border"
        )}
      >
        {featured && (
          <div
            className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-[10px] font-medium 
            border-border bg-secondary text-secondary-foreground"
            aria-label="Featured project"
          >
            <Star size={12} className="text-primary" />
            Featured
          </div>
        )}
        {/* Image now at the top */}
        <div className="relative">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openImageModal(image.src, image.alt)}
          />
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
              className="inline-flex items-center px-2.5 py-0.5 text-xs bg-primary text-primary-foreground border border-primary rounded-sm hover:bg-primary/90 transition-colors"
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