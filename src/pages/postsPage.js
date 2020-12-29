import React from 'react';
import Posts from '../components/posts';
const PostPage = (props) =>{
  return(
    <Posts history = { props.history } />
  )
}
export default PostPage;
