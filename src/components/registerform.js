import React from 'react';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { Button,
        Form,
        FormGroup,
        Label,
        Input,
        FormText,
        Container,
        Row,
        Col } from 'reactstrap';
import { email, stylingText } from '../styles/registerform.css';
const form = () => {
  return(
    <React.Fragment>
    <RemoveScrollBar />
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" className = 'stylingText' sm={12}>Email</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Username</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input type="text" name="password" id="examplePassword" placeholder="Enter Username..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className = 'stylingText'sm={12}>Password</Label>
          <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter password..." />
          </Col>
        </FormGroup>
      </Form>
    </React.Fragment>
  )
}

export default form;
