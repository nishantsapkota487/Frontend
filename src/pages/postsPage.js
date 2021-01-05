import React, { useState } from 'react';
import api from '../api/axios';
import Posts from '../components/posts';
import LoginNavbar from '../components/loginNavbar';


const PostPage = (props) =>{
  const [ user, setUser ] = useState('');
  const token = localStorage.getItem('token');
  if (!token) {
    props.history.push('/login');
  }
  api.get('api/blogs/posts', {headers:{auth_token:token}})
  .then(res=>{
    setUser(res.data.user);
  })
  .catch(err=>{
    console.log(err);
  })
  return(
    <React.Fragment>
      <LoginNavbar user = { user } history = { props.history }/>
      <Posts history = { props.history } />
    </React.Fragment>
  )
}
export default PostPage;
