import { TimeLine } from '@/components/TimeLine/TimeLine'
import { TimeLineCard } from '@/components/TimeLine/TimeLineCard'

export function EducationSection() {
    return (
        <div
            id="education"
            className="flex flex-col w-full justify-center items-center gap-0 "
        >
            <div
                className="
                    text-4xl font-bold tracking-tight
                    text-white
                  "
            >
                Educational Background
            </div>
            <div>
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
