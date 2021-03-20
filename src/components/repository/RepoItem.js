import { Chip } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import StarIcon from '@material-ui/icons/Star'
import React from 'react'
import {Button,Image, Card } from 'semantic-ui-react'

import IssueList from '../issues/IssueList'
import './RepoItem.css'

function RepoItem({repo}) {
    const {node: {name, descriptionHTML, owner: {login}, stargazers:{totalCount: totalStarCount}}} = repo
    return (
        <div className='card__container'>
        <Card className='card'>
                <Card.Content>
                    <div className='repo__header'>
                    <Card.Header><h2>{name}</h2></Card.Header>
                    <div>
                        <Chip label={`By ${login}`} avatar={<PeopleIcon/>} className='chip' />
                        <Chip label={totalStarCount} avatar={<StarIcon/>} className='chip' />         
                    </div> 
                    </div>
                    <Card.Description>
                        <p className='repo__description' dangerouslySetInnerHTML={{__html:descriptionHTML}}></p>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default RepoItem
