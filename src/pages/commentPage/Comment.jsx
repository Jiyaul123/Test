import React from 'react'
import AvatarIcon from '../../image/user.png'
import {Container, Card} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  img: {
    width: '40px',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '50%',
    marginRight: '10px',
  },

  emailText: {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})

const Comment = ({comment}) => {
  console.log(comment);
  const classes = useStyles();
  return (
    <ul>
      {comment.map((item) => (
        <div className = {classes.container}>
          <Card style={{ width: '20rem', marginTop: '20px'}}>
            <Card.Body>
              <Card.Title className =  {classes.emailText}><span><img src = {AvatarIcon} className = {classes.img}/></span>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.email}</Card.Subtitle>
              <Card.Text>
                {item.body}
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      ))}
    </ul>
  )
}

export default Comment