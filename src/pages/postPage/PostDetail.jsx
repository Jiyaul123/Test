import React, {useState, useEffect} from 'react'
import {useParams, Route} from 'react-router-dom'
import Comments from '../commentPage/Comments';
import PostDetails from './PostDetails';



const PostDetail = () => {
    const params = useParams();
    const [detail, setDetail] = useState([]);


    const fetchPostHandler = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        // const posts = data.find(post => post.id === params.postId);
        // console.log(posts);
        setDetail(data);
    }

    useEffect(() => {
        fetchPostHandler();
    },[]);


  return (
    <>  
        <PostDetails details = {detail}/>
        <Route path = {`/posts/${params.postId}/comments`}>
            <Comments />
        </Route>
    </>
  )
}

export default PostDetail