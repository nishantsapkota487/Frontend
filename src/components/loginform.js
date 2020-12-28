import React, { useState } from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { Button,
        Alert,
        Form,
        FormGroup,
        Label,
        Input,
        FormText,
        Container,
        Row,
        Col } from 'reactstrap';
import api from '../api/axios';

const FormsTwo = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ disable, setDisable ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ exist, setExist ] = useState(true);
  const [ wrongpassword, setWrongpassword ] = useState(false);
  const [ dodisable, setdoDisable ] = useState(false);

  const changeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const changePassword = (event) =>{
    setPassword(event.target.value);
  }

  const submitForm = (event) =>{
    event.preventDefault();
    setError(false);
    setExist(true);
    setWrongpassword(false);
    setdoDisable(true);
    if (email === '' || password === '') {
      setError(true);
      setVisible(true);
      setTimeout(()=>{
        setVisible(false);
        setdoDisable(false)
      }, 2000);
      return;
    }
    api.post('/api/user/login', {
      email:email,
      password:password
    })
    .then(res=>{
      console.log(res.data.message);
      if (res.data.message === 'User does not exist') {
        setExist(false);
        setVisible(true);
        setTimeout(()=>{
          setVisible(false);
          setdoDisable(false)
        }, 2000);
        return;
      }else if (res.data.message === 'Enter correct credential') {
        setWrongpassword(true);
        setVisible(true);
        setTimeout(()=>{
          setVisible(false);
          setdoDisable(false)
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
        error ?
        <Alert color = "danger" isOpen = { visible }>
          Please enter all the fields correctly.
        </Alert>
        :
        null
      }
      {
        !error && !exist ?
        <Alert color = "danger" isOpen = { visible }>
         User does not exist. Please register.
        </Alert>
        :
        null
      }
      {
        !error && exist && wrongpassword ?
        <Alert color = "danger" isOpen = { visible }>
          Please enter correct credential.
        </Alert>
        :
        null
      }
      <RemoveScrollBar />
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" className = 'stylingText' sm={12}>Email</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input onChange = { changeEmail } value = { email } type="email" name="email" id="exampleEmail" placeholder="Enter Email..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Password</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
            <Input onChange = { changePassword } value = { password } type="password" name="password" id="examplePassword" placeholder="Enter password..." />
          </Col>
        </FormGroup>
        </Form>
      {
        !dodisable ?
        <Button disabled = { false } onClick = { submitForm } color = "primary" size = "lg">Login</Button>
        :
        <Button disabled = { true } onClick = { submitForm } color = "primary" size = "lg">Logging...</Button>
      }
    </React.Fragment>
  )
}

export default FormsTwo;
