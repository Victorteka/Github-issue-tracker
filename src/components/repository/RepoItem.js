import React from 'react'
import { ExpansionPanelDetails } from '@material-ui/core'
import { Chip, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import StarIcon from '@material-ui/icons/Star'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { Card } from 'semantic-ui-react'

import IssueList from '../issues/IssueList'
import './RepoItem.css'

function RepoItem({repo}) {
    const {node: {name, descriptionHTML, owner: {login}, stargazers:{totalCount: totalStarCount}}} = repo
    return (
        <div className='card__container'>
        <Card color='green' className='card'>
            <ExpansionPanel>
                <ExpansionPanelSummary>
                <Card.Content  className='expand__panel' >
                    <div className='repo__header'>
                        <Card.Header><h2>{name}</h2></Card.Header>
                        <div>
                            <Chip label={`By ${login}`} avatar={<PeopleIcon/>} className='chip' />
                            <Chip label={totalStarCount} avatar={<StarIcon/>} className='chip' />         
                        </div> 
                    </div>
                    <Card.Description className='repoDesc' >
                        <p className='repo__description' dangerouslySetInnerHTML={{__html:descriptionHTML}}></p>
                    </Card.Description>
                <div className='expandIcon'>
                    <ExpandMoreIcon />
                </div>
                </Card.Content>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <IssueList />
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </Card>
        </div>
    )
}

export default RepoItem
