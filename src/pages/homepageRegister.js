import React from 'react';
import Navbar from '../components/navbar';
import Form from '../components/registerform';
import Foot from '../components/footer';
const homepage = () => {
  return(
    <React.Fragment>
      <Navbar />
      <Form />
      <Foot />
    </React.Fragment>
  )
}
export default homepage;
