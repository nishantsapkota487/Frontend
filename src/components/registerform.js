import React, { useState, useEffect } from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { Button,
        Form,
        FormGroup,
        Label,
        Input,
        Col } from 'reactstrap';
import { stylingText } from '../styles/registerform.css';
import api from '../api/axios';
import axios from 'axios';

const Forms = () => {
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const changeUsername = (event) =>{
    setUsername(event.target.value);

  }

  const changePassword = (event) =>{
    setPassword(event.target.value);
  }

  const submitForm = () =>{
    api.post('/api/user/register', {
      email:email,
      username:username,
      password:password
    })
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
    }
  return(
    <React.Fragment>
    <RemoveScrollBar />
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" className = 'stylingText' sm={12}>Email</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changeEmail } type="email" name="email" id="exampleEmail" placeholder="Enter Email..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Username</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changeUsername } type="text" name="password" id="examplePassword" placeholder="Enter Username..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Password</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changePassword } type="password" name="password" id="examplePassword" placeholder="Enter password..." />
          </Col>
        </FormGroup>
      </Form>
      <Button onClick = { submitForm } color = "primary" size = "lg">Register</Button>
    </React.Fragment>
  )
}

export default Forms;
