import React from 'react'

const BlogPost = ({title,content}) => {
  return (
    <>
    <div className=' m-5 p-10 border-solid border-2 rounded-3xl'>
    <h1 className='font-bold'>{title}</h1>
    <p>{content}</p>
    </div>
    </>
  )
}

export default BlogPost