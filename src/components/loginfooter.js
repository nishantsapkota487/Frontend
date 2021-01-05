import React from 'react';
import { loginfooter } from '../styles/loginFooter.css';
import { icon } from '../styles/footer.css'
import CopyrightIcon from '@material-ui/icons/Copyright';
const Loginfooter = () => {
  return(
    <React.Fragment>
      <div className = "loginfooter">
        <CopyrightIcon className = "icon"></CopyrightIcon>
        <div className = 'text'>
          2020.BlogApp. Nishant Sapkota Production.(Anonymous version)
        </div>
      </div>
    </React.Fragment>
  )
}

export default Loginfooter;
