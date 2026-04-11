export async function getRepo({
                                  user,
                                  repoName,
                              }: GetReposRequest): Promise<GetReposResponse | null> {
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

        return {
            languages_url: repoData.languages_url,
            html_url: repoData.html_url ?? '',
            description: repoData.description ?? '',
            stargazers_count: String(repoData.stargazers_count ?? 0),
        }
    } catch (e) {
        console.error('getRepo failed:', e)
        return null
    }
}

export async function getLanguages(languageLink: string): Promise<string[]> {
    const headers = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'dh1542.github.io',
    }
    const repoRes = await fetch(
        languageLink,
        { headers },
    )

    return await repoRes.json()

}