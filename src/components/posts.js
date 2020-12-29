import React, { useEffect } from 'react';
const Post = (props) =>{
  useEffect(() =>{
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('nishant');
      props.history.push('/login');
    }
  },[])
  return(
    <div>
      Cannot access;
    </div>
  )
}
export default Post;
