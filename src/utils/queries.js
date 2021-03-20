//Repos query
export const QUERY_REPOS = (queryString)=>{
    return `{
            search(query: "${queryString}", type: REPOSITORY, first: 20) {
                repositoryCount,
                edges {
                    node {
                        ... on Repository {
                            name,
                            owner {
                              login  
                            },
                            stargazers {
                                totalCount
                            },
                            descriptionHTML,
                        }
                    }   
                }
            }
    }`
}

//Issue query
export const QUERY_ISSUES = (repoName, owner) =>{
    return `{
            repository(name: "${repoName}", owner: "${owner}") {
                issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
                    nodes {
                        title,
                        bodyHTML,
                        createdAt
                    }
                }
            }
    }`
}

