import React from 'react';
import './contact.css'


class Contact extends React.Component {

  render() {
  	const arrLinks = ['GitHub','CodePen','LinkedIn','Instagram','Email'];
    const displayLinks = arrLinks.map((val, i) => {
    	return <div className="col-xs-12  col-sm-2 links" key = {i}><a href = {'#' + val} >{val}</a></div>
    }

    ); 
  	return (
  		<div className='footer'>
  		    <h2>Looking to start a project?</h2>
          <p>Lets talk</p>                      
              {displayLinks}           
      </div>
  		);
  }

}

export default Contact;
