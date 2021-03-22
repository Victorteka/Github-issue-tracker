import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'

import { searchRepo } from '../../actions'
import { QUERY_REPOS } from '../../utils/queries'
import RepoItem from './RepoItem'
import './RepoList.css'


const RepoList = (props) => {

    const [expandRepo, setExpandRepo] = useState(null)

    useEffect(()=>{
        props.searchRepo(QUERY_REPOS(props.searchTerm?props.searchTerm:'javascript'))
    },[props, props.searchTerm])

    if(props.error){
        return(
            <div>
                <h3 className='error'>{props.error}</h3>
            </div>
        )
    }

    return(
        <div>
            {
                props.loading?
                <div className="spinner">
                    <BounceLoader  />
                </div>:
                <div>
                    {
                        props.repos.search.edges.map((repo,i)=>(
                            <div repolist__container key={i}>
                                <RepoItem
                                 repo={repo}
                                 expanded={expandRepo===i}
                                 onToggled = {()=>setExpandRepo(i)} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
    
}

const mapStateToProps = (state)=>{
    return {
        loading: state.searchRes.loading,
        error: state.searchRes.error,
        repos: state.searchRes.repos
    }
}

export default connect(mapStateToProps,{ searchRepo}) (RepoList)
