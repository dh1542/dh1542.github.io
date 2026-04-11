type GetReposRequest = {
    user: string;
    repoName: string;
}

type GetReposResponse = {
    name: string;
    languages_url: string | undefined;
    html_url: string;
    description: string;
    stargazers_count: string;
}

type Repo = {
    name: string;
    languages: string[];
    html_url: string;
    description: string;
    stargazers_count: string;
}