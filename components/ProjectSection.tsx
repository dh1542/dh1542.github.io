'use client'
import GithubRepoList from '@/components/GithubRepoList'
import { TimeLine } from '@/components/TimeLine/TimeLine'
import { TimeLineCard } from '@/components/TimeLine/TimeLineCard'
import { useRepo } from '@/hooks/useRepo'

export default function ProjectSection() {

    const repoList = [{ user: 'dh1542', repoName: 'vessel-tracker' }, {user: 'rtdip', repoName: 'core'}]
    const repos = useRepo(repoList)
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
                    {repos?.map((r) => (
                        <TimeLineCard
                            key={r.html_url}
                            title={r.html_url}
                            institution={r.html_url}
                            description={r.description}
                        />
                    ))}
                </TimeLine>
            </div>
        </div>
    );

}
