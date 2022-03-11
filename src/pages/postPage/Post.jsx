import React from 'react'
import AddPost from '../../components/AddPost'

const Post = () => {

    const handlePostData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const data = await response.json();
        console.log(data);
    }

  return (
    <AddPost onAddPost = {handlePostData}/>
  )
}

export default Post