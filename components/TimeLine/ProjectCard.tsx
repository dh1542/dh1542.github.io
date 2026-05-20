import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { TypeScript, Go, JavaScript, HTML5, CSS, Docker, Python} from '@/components/ui/icons/logos'


const languageIcons = {
    TypeScript: TypeScript,
    Go: Go,
    JavaScript: JavaScript,
    HTML: HTML5,
    CSS: CSS,
    Dockerfile: Docker,
    Python: Python
} as const

type ProjectCardProps = {
    title: string
    url: string
    description: ReactNode | string
    languages: string[]
}

export function ProjectCard({
                                    title,
                                    url,
                                    description,
                                    languages




                                }: ProjectCardProps) {
    return (
        <Card
            className=" w-90 rounded-xl
              bg-gradient-to-b
              from-[#2a2b36]
              to-[#252630]
              border border-white/5
            "
        >
            <div className="flex flex-row gap-1">
                <div className="w-1 rounded-full bg-secondary"></div>
                <div className="w-full flex flex-col gap-4">
                    <CardHeader className="flex flex-col gap-0 p-1">
                        <CardTitle className="text-base">{title}</CardTitle>
                        <CardDescription className="pt-0">
                            <div className="text-primary font-bold text-xs">
                                {url.startsWith('http') ? (
                                    <a href={url}>
                                        {url}
                                    </a>
                                ) : (
                                    <span>{url}</span>
                                )}
                            </div>
                        </CardDescription>




                    </CardHeader>
                    <CardContent
                        className="
              p-1 text-xs text-gray-300 leading-relaxed
              [&_ul]:ml-4
              [&_ul]:list-disc
              [&_ul]:space-y-1
              [&_li]:leading-relaxed
              [&_li::marker]:text-secondary

            "
                    >
                        {description}
                        <br/>
                        <div className="flex flex-row flex-wrap gap-2 ml-0 pt-3">{
                            languages.map((l) => {
                                const Icon = languageIcons[l as keyof typeof languageIcons]

                                return (<Badge className="bg-secondary" key={l} variant="outline">{Icon ? <Icon className="h-4 w-4"/> : null}  {l}</Badge>
                            )})}</div>

                    </CardContent>

                </div>
            </div>
        </Card>
    )
}
