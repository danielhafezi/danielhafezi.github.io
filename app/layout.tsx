import "./globals.css"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Caveat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans" })
const ibmPlexMonoDisplay = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" })
const ibmPlexMonoCode = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwriting" })

export const metadata: Metadata = {
  title: "Daniel Hafezi",
  description: "Portfolio of Daniel Hafezi, Full Stack Developer specializing in React, Next.js, and AI applications",
  icons: {
    icon: '/sparkle.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(ibmPlexMono.variable, ibmPlexMonoDisplay.variable, ibmPlexMonoCode.variable, caveat.variable, "min-h-screen antialiased font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          {/* Global SVG Filter for Sketchy Borders */}
          <svg style={{ visibility: 'hidden', position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <filter id="rough-border">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
          </svg>
        </ThemeProvider>
      </body>
    </html>
  )
}
