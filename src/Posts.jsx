import React, { useState } from 'react'
import BlogPost from './BlogPost'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {

  return (
    <div>
    {posts.map((post)=>(<Link key={post.id} to={`/posts/${post.id}`}><BlogPost key={post.id} title={post.title} content={post.content}></BlogPost></Link>))}
     </div>
  )
}

export default Posts