import { TimeLine } from '@/components/TimeLine/TimeLine';
import { DescriptionCard } from '@/components/TimeLine/DescriptionCard';

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
                    <DescriptionCard
                        title="Abitur"
                        institution="Staatliche FOS/BOS Ansbach"
                        description="High school diploma, entry qualification for universities."
                        duration="September 2016 - June 2019"
                    />
                    <DescriptionCard
                        title="B.Sc. Information Systems"
                        institution="Technische Universtät Berlin"
                        description="Transferred, no degree"
                        duration="September 2019 - October 2021"
                    />
                    <DescriptionCard
                        title="B.Sc. Computer Science"
                        institution="Friedrich Alexander Universität Erlangen"
                        description="Completed coursework in algorithms and data structures, software engineering, databases, operating systems, computer networks, and theoretical computer science. Gained practical experience through programming assignments, team projects, and applied software development."
                        duration="September 2021 - April 2026"
                    />
                </TimeLine>
            </div>
        </div>
    );
}
