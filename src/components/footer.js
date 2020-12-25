import React from 'react';
import { footer, icon, text } from '../styles/footer.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
const foot = () => {
  return(
    <React.Fragment>
      <div className = "footer">
        <CopyrightIcon className = "icon"></CopyrightIcon>
        <div className = 'text'>
          2020.BlogApp. Nishant Sapkota Production.
        </div>
      </div>
    </React.Fragment>
  )
}

export default foot;
