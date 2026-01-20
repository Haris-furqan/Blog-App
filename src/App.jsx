import React from 'react'
import Posts from './Posts';
import MainScreen from './MainScreen'
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Post from './Post';
const App = () => {
  const [posts,setPosts] = useState([{id:0,title:"Dummy Post",content:"Dummy Content"}]);
  const handleData = (title,content) => 
  {
    setPosts([...posts,{id:Date.now(),title:title,content:content}]);
    
  }

  return (
 
    <div>
    <Routes>
      <Route element={<MainScreen handleData={handleData} posts={posts} />} path='/' ></Route>
      <Route element={<Post posts={posts}/>} path='/posts/:id'> </Route>
    </Routes> 

    </div>
)
}
  


export default App