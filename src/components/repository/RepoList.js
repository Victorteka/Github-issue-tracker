import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'

import { searchRepo } from '../../actions'
import { QUERY_REPOS } from '../../utils/queries'


const RepoList = (props) => {

    useEffect(()=>{
        props.searchRepo(QUERY_REPOS('React'))
    },[])

    if(props.loading){
        return(
            <div>
                <BounceLoader />
            </div>
        )
    }

    if(props.error){
        return (
            <div>
                <h1>Error occured!</h1>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Repo</h1>
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
