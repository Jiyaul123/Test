import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        marginTop: '3rem',
        padding: '3rem',
        border: '1px solid #ccc',
        borderRadius: '10px',
    },
    heading: {
        width: '10rem',
        fontFamily: 'sans-serif',
        borderBottom: '1px solid slategray',
        borderRadius: '5px',
    }
})

const AddPost = (props) => {
    const classes = useStyles();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [postContent, setPostContent] = useState();

    const handleIdInput = (e) => {
        setId(e.target.value);
    }

    const handleTitleInput = (e) => {
        setTitle(e.target.value);
    }

    const handlePostContentInput = (e) => {
        setPostContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: id,
            title: title,
            body: postContent
        }
        setId("");
        setTitle("");
        setPostContent("");

        props.onAddPost(data);
    }

  return (
    <Container className = {classes.container}>
        <h2 className={classes.heading}>Add Post</h2>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>User Id</Form.Label>
                <Form.Control 
                    type="number" 
                    onChange = {handleIdInput} 
                    value = {id}    
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text"
                    onChange = {handleTitleInput}
                    value = {title}    
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Body</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    onChange = {handlePostContentInput}
                    value = {postContent}
                />
            </Form.Group>
            <Button type = "submit">Add Post</Button>
        </Form>
    </Container>
  )
}

export default AddPost