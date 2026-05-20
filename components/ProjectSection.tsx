'use client'
import { TimeLine } from '@/components/TimeLine/TimeLine'
import { useRepo } from '@/hooks/useRepo'
import { ProjectCard } from '@/components/TimeLine/ProjectCard'

const repoList = [{ user: 'dh1542', repoName: 'vessel-tracker' }, {user: 'rtdip', repoName: 'core'}, {user: 'dh1542', repoName: 'dh1542.github.io'}]

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
                        <ProjectCard
                            key={r.html_url}
                            title={r.name}
                            url={r.html_url}
                            description={r.description}
                            languages={r.languages}
                        />
                    ))}
                </TimeLine>
                <br/>


            </div>
        </div>
    );

}
