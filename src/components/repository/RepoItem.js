import React from 'react'

function RepoItem({repos}) {
    return (
        <div>
            {
                repos.map((repo, i)=>(
                    <div key={i}>
                        <h3>{repo.node.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default RepoItem
