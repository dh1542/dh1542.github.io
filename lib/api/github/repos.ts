export async function getRepo({
                                  user,
                                  repoName,
                              }: GetReposRequest): Promise<Repo | null> {
    try {
        const headers = {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'dh1542.github.io',
        }
        const repoRes = await fetch(
            `https://api.github.com/repos/${user}/${repoName}`,
            { headers },
        )


        if (!repoRes.ok) {
            const text = await repoRes.text()
            console.error('GitHub error:', repoRes.status, text)
            return null
        }

        const repoData = await repoRes.json()

        const repo_languages = await fetch(
            repoData.languages_url, { headers },
        )
        if (!repo_languages.ok) {
            const text = await repoRes.text()
            console.error('GitHub error:', repoRes.status, text)
            return null
        }

        const languageData = await repo_languages.json()

        return {
            name: repoName,
            languages: languageData ?? [''],
            html_url: repoData.html_url ?? '',
            description: repoData.description ?? '',
            stargazers_count: String(repoData.stargazers_count ?? 0),
        }
    } catch (e) {
        console.error('getRepo failed:', e)
        return null
    }
}
