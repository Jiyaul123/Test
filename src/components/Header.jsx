import React from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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

    navigation: {
        marginLeft: '50rem',
    }
})

const Header = () => {
    const classes = useStyles();
  return (
    <Navbar bg="light" variant="light">
        <Container>
            <div className={classes.navigation}>
                <Nav className="me-auto">
                    <Link to = "/" style = {{color: 'inherit', textDecoration: 'none'}}>
                        <Button className = {classes.root}>All Post</Button>
                    </Link>
                    <Link to = "/add-post" style = {{color: 'inherit', textDecoration: 'none'}}>
                        <Button className = {classes.root}>Add Post</Button>
                    </Link>
                </Nav>
            </div>
        </Container>
  </Navbar>
  );
}

export default Header