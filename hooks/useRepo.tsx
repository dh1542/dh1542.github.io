'use client'

import { useEffect, useState } from 'react'
import { getRepo } from '@/lib/api/github/repos'


export function useRepo(
    repositories: GetReposRequest[]
): Repo[] | null {
    const [repos, setRepos] = useState<Repo[] | null>(null)

    useEffect(() => {
        async function loadRepos() {
            const repResults = await Promise.all(
                repositories.map((r) =>
                    getRepo({ user: r.user, repoName: r.repoName })
                )
            )

            setRepos(repResults.filter((repo): repo is Repo => repo !== null))
        }

        loadRepos()

            }, [repositories])

    return repos
}