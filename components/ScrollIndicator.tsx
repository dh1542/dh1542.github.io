'use client'

import { ChevronsDown } from 'lucide-react'
import { useSectionVisibility } from '@/hooks/useCurrentSection'

const SECTIONS = ['hero', 'about', 'education', 'work', 'contact']

export function ScrollIndicator() {
    const { current, showIndicator } = useSectionVisibility(SECTIONS)

    const index = SECTIONS.indexOf(current)
    const next = SECTIONS[index + 1]

    if (!next) return null

    const scrollToNext = () => {
        document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            className={`
        fixed bottom-6 left-1/2 -translate-x-1/2
        animate-bounce
        rounded-full
        text-white
        bg-transparent
        transition-all duration-300 ease-out
        hover:bg-secondary
        [&_svg]:w-12 [&_svg]:h-12
        z-11
        ${
            showIndicator
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-6 pointer-events-none'
        }
      `}
        >
            <ChevronsDown />
        </button>
    )
}
