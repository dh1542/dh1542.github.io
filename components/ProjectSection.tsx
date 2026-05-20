'use client'
import { TimeLine } from '@/components/TimeLine/TimeLine'
import { DescriptionCard } from '@/components/TimeLine/DescriptionCard'
import { useRepo } from '@/hooks/useRepo'

const repoList = [{ user: 'dh1542', repoName: 'vessel-tracker' }, {user: 'rtdip', repoName: 'core'}]

export default function ProjectSection() {

    const repos = useRepo(repoList)

    return (
        <div
            id="projects"
            className="flex flex-col w-full justify-center items-center gap-0 "
        >
            <div
                className="
                    text-4xl font-bold tracking-tight
                    text-white
                  "
            >
                Contributed and Self Made Projects
            </div>
            <div>
                <TimeLine>
                    {repos?.map((r) => (
                        <DescriptionCard
                            key={r.html_url}
                            title={r.name}
                            institution={r.html_url}
                            description={r.description}
                        />
                    ))}
                </TimeLine>
            </div>
        </div>
    );

}
