import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Issue from './Issue'
import {fetchIssue} from '../../actions'
import { QUERY_ISSUES } from '../../utils/queries'

function IssueList({repoName, owner, fetchIssue}) {
    console.log(owner)
    useEffect(()=>{
        fetchIssue(QUERY_ISSUES(repoName, owner))
    },[])
    return (
        <div>
            <Issue />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        loading: state.issuesRes.loading,
        error: state.issuesRes.error,
        issues: state.issuesRes.issues
    }
}

export default connect(mapStateToProps, {fetchIssue}) (IssueList)
