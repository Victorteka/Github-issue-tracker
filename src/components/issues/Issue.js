import moment from 'moment'
import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
import {List} from 'semantic-ui-react'

function Issue({issues, loading}) {

    const formatDate = (date) =>{
        return moment(date, 'YYYYMMDD').fromNow()
    }

    return (
        <div>
            {loading? <div style={{padding:'20px'}}><BounceLoader/></div>: issues.map((issue, index)=>(
                <List>
                    <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{issue.title}</List.Header>
                            <List.Description as='a'>Created: {formatDate(issue.createdAt)}</List.Description>
                        </List.Content>
                    </List.Item>    
                </List>
            ))}
        </div>
    )
}

export default Issue
