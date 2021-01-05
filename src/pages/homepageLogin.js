import React from 'react';
import Navbar from '../components/navbar';
import LoginFoot from '../components/loginfooter';
import LoginForm from '../components/loginform';


const homepageLogin = (props) =>{
  return(
    <React.Fragment>
      <Navbar />
      <LoginForm history={props.history} />
    </React.Fragment>
  )
}

export default homepageLogin;
