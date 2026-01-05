import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ReactNode } from 'react'

type TimeLineCardProps = {
    title: string
    institution: string
    description: ReactNode | string
    duration: string
}

export function TimeLineCard({
    title,
    institution,
    description,
    duration,
}: TimeLineCardProps) {
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
                            <div className="text-secondary font-bold text-xs">
                                {institution}
                            </div>
                        </CardDescription>
                        <div className="text-xs">{duration}</div>
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
                    </CardContent>
                </div>
            </div>
        </Card>
    )
}
