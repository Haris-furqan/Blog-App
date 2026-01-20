import React, { useState } from 'react'
import Posts from './Posts';
import InputBox from './InputBox';

const MainScreen = ({posts,handleData}) => {
  const [showInputBox,setShowInputBox] = useState(false);
      
  return (
    <div>
        <div className='flex justify-end bg-blue-500 h-20'>
            <button className='border-2 m-5 p-2 rounded-2xl bg-blue-700 items-center' onClick={()=>{setShowInputBox(true)}}>create new post</button>
        </div>
        <div>{showInputBox && <InputBox onAction = {handleData} /> }</div>
        
              <Posts posts={posts}></Posts>
    </div>
  )
}

export default MainScreen