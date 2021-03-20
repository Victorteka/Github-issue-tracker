import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'

import { searchRepo } from '../../actions'
import { QUERY_REPOS } from '../../utils/queries'
import RepoItem from './RepoItem'
import './RepoList.css'


const RepoList = (props) => {

    useEffect(()=>{
        props.searchRepo(QUERY_REPOS('React'))
    },[])

    if(props.error){
        return(
            <div>
                <h1>{props.error}</h1>
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
                                <RepoItem repo={repo} />
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
