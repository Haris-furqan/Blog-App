import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const Post = ({posts}) => {
    const {id} = useParams();  
    const post = posts.find(p=> p.id == Number(id));
    

  return (

<>
    <Link to={"/"}><FaArrowLeft size={24} className='m-10'/></Link>
   <BlogPost title={post.title} content={post.content}/>
</>
 
    
  )
}

export default Post