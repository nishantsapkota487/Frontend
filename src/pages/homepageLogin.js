import React from 'react';
import Navbar from '../components/navbar';
import LoginFoot from '../components/loginfooter';
import LoginForm from '../components/loginform';
import {loginfooter} from '../styles/loginFooter.css';

const homepageLogin = () =>{
  return(
    <React.Fragment>
      <Navbar />
      <LoginForm />
      <LoginFoot />
    </React.Fragment>
  )
}

export default homepageLogin;
