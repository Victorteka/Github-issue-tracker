/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Issue from './Issue'
import {fetchIssue} from '../../actions'
import { QUERY_ISSUES } from '../../utils/queries'

function IssueList({repoName, owner, fetchIssue,issues, loading}) {
    useEffect(()=>{
        fetchIssue(QUERY_ISSUES(repoName, owner))
    },[])

    
    return (
        <div>
            <h3 style={{textAlign:'centre',color:'green'}}>Issues</h3>
            <Issue issues={issues.nodes} loading={loading} />
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
