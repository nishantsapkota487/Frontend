import React from 'react';
import Navbar from '../components/navbar';
import Form from '../components/registerform';
import Foot from '../components/footer';
const homepage = (props) => {
  return(
    <React.Fragment>
      <Navbar />
      <Form hi="nishant" />
    </React.Fragment>
  )
}
export default homepage;
