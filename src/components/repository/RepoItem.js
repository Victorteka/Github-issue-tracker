import React from 'react'
import IssueList from '../issues/IssueList'

function RepoItem({repo}) {
    const {node: {name, descriptionHTML, owner: {login}, stargazers:{totalCount: totalStarCount}}} = repo
    return (
        <div>
            <h4>{name}</h4>
            <IssueList repoName={name} owner={login} />
        </div>
    )
}

export default RepoItem
