"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={cn(
        "md:flex md:space-x-8",
        isMenuOpen
          ? "absolute left-0 right-0 top-full bg-background border-b border-border p-4 space-y-4 shadow-lg md:shadow-none z-50"
          : "hidden"
        , "md:relative md:p-0 md:space-y-0 md:bg-transparent md:border-none md:flex"
      )}>
        <Link 
          href="/#home"
          className="text-primary hover:text-primary/80 transition-colors block"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/#about" 
          className="text-primary hover:text-primary/80 transition-colors block"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          href="/#projects" 
          className="text-primary hover:text-primary/80 transition-colors block"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link 
          href="https://github.com/DanielHafezi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary/80 transition-colors block"
          onClick={() => setIsMenuOpen(false)}
        >
          GitHub Profile
        </Link>
        <Link 
          href="mailto:danielhafezian@gmail.com" 
          className="text-primary hover:text-primary/80 transition-colors block"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      <ThemeToggle />
    </div>
  )
}