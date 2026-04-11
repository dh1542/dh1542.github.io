'use client'

import { useRepo } from '@/hooks/useRepo'

export default function GithubRepoList() {
    const repoRequests = [{ user: 'dh1542', repoName: 'vessel-tracker' }]
    const repos = useRepo(repoRequests)



    return (
        <div className={"w-100 h-100 bg-white"}>
            {repos === null ? (
                <p>Loading or no repos found</p>
            ) : (
                repos.map((r) => (
                    <h3 key={r.html_url}>{r.description}</h3>
                ))
            )}
        </div>
    )
}