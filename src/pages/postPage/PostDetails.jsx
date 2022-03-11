import React from 'react'
import { Card, Container } from 'react-bootstrap'

const PostDetails = ({details}) => {
  return (
      <div>
           {details.map((detail) => (
             <Container style = {{marginTop: '20px'}}>
             <Card key = {detail.id}>
                 <Card.Body>
                     <Card.Title>{detail.title}</Card.Title>
                     <Card.Text>{detail.body}</Card.Text>
                 </Card.Body>
             </Card>
         </Container>
        ))}
      </div>
       
  )
}

export default PostDetails