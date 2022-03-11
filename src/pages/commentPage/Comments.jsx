import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core';
import Comment from './Comment'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

const Comments = () => {
    const [fetchComments, setFetchComments] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((response) => {
            return response.json();
        }).then((data) => {
            setFetchComments(data);
        }).catch((error) => {
            console.log(error);
        })
    },[])
  return (
    <div>
        <h3 className='comments-title'>
            Comments
        </h3>
        <div className= {classes.container}>
            <Comment comment = {fetchComments}/>
        </div>
    </div>
  )
}

export default Comments