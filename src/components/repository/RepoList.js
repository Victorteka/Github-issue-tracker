import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'
import { useDebounce } from 'use-debounce/lib'

import { searchRepo } from '../../actions'
import { QUERY_REPOS } from '../../utils/queries'
import RepoItem from './RepoItem'
import './RepoList.css'


const RepoList = (props) => {

    const [debounceSearchTerm] = useDebounce(props.searchTerm, 1000)

    useEffect(()=>{
        props.searchRepo(QUERY_REPOS(debounceSearchTerm?debounceSearchTerm:'javascript'))
    },[debounceSearchTerm])

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
