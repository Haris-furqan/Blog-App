import React, { useState } from 'react'

const InputBox = ({onAction}) => {
    const [title,setTitle] = useState();
    const [content,setContent] = useState();

    const handletitleInput = (e) => {
        setTitle(e.target.value);
    }

    const handlecontentInput = (e) => {
        setContent(e.target.value);
    }
  return (
    <div>
       
        <h3 className='font-bold'>Enter Title:</h3>
        <input className='border-solid border-2 ' onChange={handletitleInput} type="text" />
        <h3 className='font-bold'>Enter Content:</h3>
        <textarea className='border-solid border-2' onChange={handlecontentInput} name="Content" id="content"></textarea>
        <br />
        <button className='border-2 m-2 p-2 rounded-2xl bg-blue-700 items-center' onClick={()=>onAction(title,content)}>submit</button>
       

    </div>
  )
}

export default InputBox