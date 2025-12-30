import { TimeLine } from '@/components/TimeLine'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

type TimeLineCardProps = {
    title: string
    institution: string
    description: string
    duration: string
}

function TimeLineCard({
    title,
    institution,
    description,
    duration,
}: TimeLineCardProps) {
    return (
        <Card className="w-full h-40 w-90 bg-[#252630] rounded-xl">
            <div className="flex flex-row gap-1">
                <div className="h-30 w-1 rounded-full bg-secondary"></div>
                <div className="w-full flex flex-col gap-2">
                    <CardHeader className="flex flex-col gap-0">
                        <CardTitle className="text-base">{title}</CardTitle>
                        <CardDescription className="pt-0">
                            <div className="text-secondary font-bold text-xs">
                                {institution}
                            </div>
                        </CardDescription>
                        <p className="text-gray-500 text-xs">{duration}</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-gray-300">{description}</p>
                    </CardContent>
                </div>
            </div>
        </Card>
    )l
}

export function WorkSection() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div id="work">
                <TimeLine>
                    <TimeLineCard
                        title="Abitur"
                        institution="Staatliche FOS/BOS Ansbach"
                        description="High school diploma, entry qualification for universities."
                        duration="September 2016 - June 2019"
                    />
                    <TimeLineCard
                        title="B.Sc. Information Systems"
                        institution="Technische Universtät Berlin"
                        description="Transferred, no degree"
                        duration="September 2019 - October 2021"
                    />
                    <TimeLineCard
                        title="B.Sc. Computer Science"
                        institution="Friedrich Alexander Universität Erlangen"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
                        duration="September 2021 - April 2026"
                    />
                </TimeLine>
            </div>
        </div>
    )
}
