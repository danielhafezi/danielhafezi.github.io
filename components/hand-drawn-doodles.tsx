"use client";

import { useDrawOnScroll } from "@/hooks/use-draw-on-scroll";

// Base SVG wrapper with draw animation
interface DoodleProps {
    className?: string;
}

// Heart with EKG line - for medical/dad project
export function HeartDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '300' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Heart shape */}
            <path
                d="M50 85 C20 60, 10 40, 25 25 C35 15, 50 20, 50 35 C50 20, 65 15, 75 25 C90 40, 80 60, 50 85"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* EKG line through heart */}
            <path
                d="M10 50 L30 50 L35 35 L40 65 L45 45 L50 55 L55 50 L90 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

// Lock/Shield - for privacy/data protection
export function PrivacyDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '250' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Shield shape */}
            <path
                d="M50 10 L85 25 C85 55, 75 75, 50 90 C25 75, 15 55, 15 25 L50 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Lock inside */}
            <rect x="35" y="45" width="30" height="25" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M40 45 L40 35 C40 28, 45 23, 50 23 C55 23, 60 28, 60 35 L60 45" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Keyhole */}
            <circle cx="50" cy="55" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 59 L50 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// Graduation cap with sparkle - for dissertation/academic achievement
export function GraduationDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '280' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Cap top */}
            <path
                d="M50 20 L10 40 L50 60 L90 40 L50 20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Cap side */}
            <path d="M25 47 L25 65 C25 70, 35 78, 50 78 C65 78, 75 70, 75 65 L75 47" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Tassel */}
            <path d="M75 40 L75 55 Q78 65, 82 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* A+ sparkle */}
            <text x="42" y="90" fontSize="14" fill="currentColor" fontFamily="serif" fontWeight="bold">A+</text>
            {/* Sparkle */}
            <path d="M85 15 L88 22 L95 22 L89 27 L92 35 L85 30 L78 35 L81 27 L75 22 L82 22 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    );
}

// Brain with gears - for understanding people/AI
export function BrainDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '350' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Brain outline */}
            <path
                d="M50 85 C30 85, 15 70, 15 55 C15 45, 20 38, 28 35 C25 30, 25 22, 32 18 C38 13, 48 15, 50 20 C52 15, 62 13, 68 18 C75 22, 75 30, 72 35 C80 38, 85 45, 85 55 C85 70, 70 85, 50 85"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Brain ridges */}
            <path d="M50 20 L50 85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M35 35 C40 45, 45 50, 35 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M65 35 C60 45, 55 50, 65 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
            {/* Small light bulb */}
            <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M77 28 L77 32 M83 28 L83 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {/* Rays */}
            <path d="M80 8 L80 5 M90 20 L93 20 M87 13 L90 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

// Chart with trend line - for crypto/analytics
export function ChartDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '280' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Axes */}
            <path d="M15 15 L15 85 L90 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Volatile line */}
            <path
                d="M20 70 L30 55 L35 65 L45 30 L55 50 L65 25 L75 40 L85 20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Bars decorative */}
            <path d="M25 85 L25 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M40 85 L40 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M55 85 L55 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M70 85 L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        </svg>
    );
}

// Rocket - for startup
export function RocketDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '300' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Rocket body */}
            <path
                d="M50 10 C60 10, 70 30, 70 55 L65 65 L35 65 L30 55 C30 30, 40 10, 50 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Window */}
            <circle cx="50" cy="35" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Fins */}
            <path d="M30 55 L20 70 L35 65" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M70 55 L80 70 L65 65" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Flames */}
            <path d="M40 65 Q45 80, 42 90" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 65 Q50 85, 50 95" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M60 65 Q55 80, 58 90" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Stars */}
            <circle cx="15" cy="20" r="2" fill="currentColor" />
            <circle cx="85" cy="15" r="2" fill="currentColor" />
            <circle cx="90" cy="40" r="1.5" fill="currentColor" />
        </svg>
    );
}

// Stack of books with A+ - for coursework
export function BooksDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '320' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Bottom book */}
            <path d="M15 85 L15 70 L80 70 L80 85 L15 85" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M18 70 L18 85" stroke="currentColor" strokeWidth="1.5" />
            {/* Middle book - tilted */}
            <path d="M20 70 L25 55 L85 60 L80 75" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M28 56 L23 71" stroke="currentColor" strokeWidth="1.5" />
            {/* Top book */}
            <path d="M25 55 L25 40 L75 40 L75 55 L25 55" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M28 40 L28 55" stroke="currentColor" strokeWidth="1.5" />
            {/* Lines on top book */}
            <path d="M35 45 L65 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M35 50 L55 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {/* A+ badge */}
            <circle cx="82" cy="25" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="74" y="30" fontSize="12" fill="currentColor" fontFamily="serif" fontWeight="bold">A+</text>
        </svg>
    );
}

// Magnifying glass with sparkles - for scholarship scout
export function SearchDoodle({ className = "" }: DoodleProps) {
    const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });

    return (
        <svg
            ref={ref}
            className={`w-20 h-20 text-red-500/40 ${className} svg-draw-doodle ${isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}`}
            style={{ '--path-length': '250' } as React.CSSProperties}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Magnifying glass */}
            <circle cx="42" cy="42" r="28" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="M62 62 L88 88" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            {/* Shine on glass */}
            <path d="M28 28 C32 24, 38 22, 42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Sparkles/stars around */}
            <path d="M75 20 L77 25 L82 25 L78 28 L80 33 L75 30 L70 33 L72 28 L68 25 L73 25 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="75" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="85" cy="55" r="2" fill="currentColor" />
        </svg>
    );
}

// Map for easy lookup by annotation index
export const annotationDoodles: Record<number, React.FC<DoodleProps>> = {
    0: HeartDoodle,        // "built for my dad, when we needed clarity..."
    1: PrivacyDoodle,      // "frustrated with data leaks..."
    2: GraduationDoodle,   // "my dissertation—proving small models..."
    3: BrainDoodle,        // "asking: what if AI could really understand people?"
    4: ChartDoodle,        // "crypto was chaos..."
    5: RocketDoodle,       // "the startup that taught me everything..."
    6: BooksDoodle,        // "MSc Computing coursework—all A+"
    7: SearchDoodle,       // "scraping my way to a scholarship"
};
