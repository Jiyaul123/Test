import React from 'react'
import { Container, Card, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        marginTop: '30px',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginRight: '20px'
    },
})

const Card_Container = (props) => {
    const classes = useStyles();
  return (
    <Container className = {classes.container}>
            <Card key = {props.id}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.body}</Card.Text>
                    <Link to = {`/posts/${props.id}`}><Button className = {classes.root}>View</Button></Link>
                </Card.Body>
        </Card>
    </Container>
  )
}

export default Card_Container