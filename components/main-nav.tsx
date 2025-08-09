"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github, Mail, type LucideIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

type NavItem = {
  href: string
  label: string
  Icon: LucideIcon
  external?: boolean
}

const navItems: NavItem[] = [
  { href: "https://github.com/DanielHafezi", label: "GitHub", Icon: Github, external: true },
  { href: "mailto:danielhafezian@gmail.com", label: "Contact", Icon: Mail },
]

export function MainNav() {
  return (
    <div className="relative flex items-center justify-between w-full">
      <nav
        className={cn(
          "flex items-center gap-3 md:gap-6"
        )}
      >
        {navItems.map(({ href, label, Icon, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={label}
            title={label}
          >
            <Icon className="h-5 w-5" />
            <span className="hidden md:inline text-sm font-medium text-primary hover:text-primary/80">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      <ThemeToggle />
    </div>
  )
}