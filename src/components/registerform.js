import React, { useState } from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { Button,
        Alert,
        Form,
        FormGroup,
        Label,
        Input,
        Col } from 'reactstrap';
import { stylingText } from '../styles/registerform.css';
import api from '../api/axios';


const Forms = (props) => {
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ correctCredential, setCorrectCredential ] = useState(true);
  const [ exist, setExist ] = useState(false);
  const [visible, setVisible] = useState(true);
  const [success, setSuccess ] = useState(false);
  const [disable, setDisable ] = useState(false);

  const changeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const changeUsername = (event) =>{
    setUsername(event.target.value);

  }

  const changePassword = (event) =>{
    setPassword(event.target.value);
  }

  const submitForm = (event) =>{
    event.preventDefault();
    setDisable(true);
    if (email && username && password) {
      setCorrectCredential(true);
    }
    if (email === '' || username === '' || password === '') {
      setVisible(true);
      setCorrectCredential(false);
      setTimeout(()=>{
        setVisible(false)
        setDisable(false)
      }, 2000)

      return;
    }
    api.post("/api/user/register/", {
      username:username,
      email:email,
      password:password
    })
    .then(res=>{
      console.log(disable);
      if (res.data.message === 'Registration failed') {
        setCorrectCredential(false);
        setVisible(true)
        setTimeout(()=>{
          setVisible(false)
          setDisable(false)
        }, 2000)

        return;
      }else if (res.data.message === 'User Already exists') {
        setVisible(true);
        setExist(true);
        setTimeout(()=>{
          setVisible(false)
          setDisable(false)
        }, 2000)

        return;
      }else{
        setExist(false)
        setVisible(true);
        setSuccess(true);
        setTimeout(()=>{
          setVisible(false)
          setDisable(false);
        }, 2000)
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return(
    <React.Fragment>
    {
      !correctCredential ?
        <Alert color = "danger" isOpen= { visible }>
          Please fill all the fields correctly. Failed to register.
        </Alert>
      :
      null
    }
    {
      exist && correctCredential ?
        <Alert color = "danger" isOpen = { visible }>
          User already exists. Can't register.
        </Alert>
      :
      null
    }
    {
      success && !exist && correctCredential ?
      <Alert color = "success" isOpen = { visible }>
        Successfully registered. Go to Login!!
      </Alert>
      :
      null
    }
    <RemoveScrollBar />
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" className = 'stylingText' sm={12}>Email</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changeEmail } value = {email} type="email" name="email" id="exampleEmail" placeholder="Enter Email..."  />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Username</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changeUsername } value={username} type="text" name="password" id="examplePassword" placeholder="Enter Username..."  />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Password</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changePassword } value={password} type="password" name="password" id="examplePassword" placeholder="Enter password..."  />
          </Col>
        </FormGroup>
      </Form>
      {
        !disable ?
        <Button disabled = { false } onClick = { submitForm } color = "primary" size = "lg">Register</Button>
        :
        <Button disabled ={ true } onClick = { submitForm } color = "primary" size = "lg">Registering...</Button>
      }
    </React.Fragment>
  )
}

export default Forms;
