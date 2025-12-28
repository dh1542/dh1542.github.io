'use client'

import { Typewriter } from 'react-simple-typewriter'

interface TypeWriterProps {
    staticText: string
    completions: string[]
}

export default function TypeWriter({
    staticText,
    completions,
}: TypeWriterProps) {
    return (
        <h1 className="text-white text-4xl md:text-2xl font-bold tracking-tight">
            {staticText}{' '}
            <span className="text-purple-500">
                <Typewriter
                    words={completions}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1500}
                />
            </span>
        </h1>
    )
}
