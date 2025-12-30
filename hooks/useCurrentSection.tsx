'use client'
import { useEffect, useState } from 'react'

export function useSectionVisibility(sectionIds: string[]) {
    const [current, setCurrent] = useState(sectionIds[0])
    const [showIndicator, setShowIndicator] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrent(entry.target.id)
                        setShowIndicator(entry.intersectionRatio >= 0.6)
                    }
                })
            },
            {
                threshold: [0, 0.4, 0.6, 1],
            }
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds])

    return { current, showIndicator }
}
