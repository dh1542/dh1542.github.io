type GetReposRequest = {
    user: string;
    repoName: string;
}

type GetReposResponse = {
    languages_url: string | undefined;
    html_url: string;
    description: string;
    stargazers_count: string;
}

type Repo = {
    name: string;
    languages: string[] | undefined;
    html_url: string;
    description: string;
}