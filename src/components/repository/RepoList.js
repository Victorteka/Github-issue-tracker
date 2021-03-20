import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'

import { searchRepo } from '../../actions'
import { QUERY_REPOS } from '../../utils/queries'
import RepoItem from './RepoItem'


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
                <div>
                    <BounceLoader />
                </div>:
                <div>
                    <RepoItem repos={props.repos.search.edges} />
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
