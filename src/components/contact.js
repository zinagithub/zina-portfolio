import React from 'react';
import './contact.css'


class Contact extends React.Component {

  render() {
  	const arrLinks = [
    {name :'GitHub', adress : 'https://github.com/zinagithub/'},
    {name :'CodePen', adress : 'https://codepen.io/zinafreecode'},
    {name :'LinkedIn', adress : 'https://www.linkedin.com/in/zina-talaa-b0808b177/'},
    {name :'Instagram', adress :''},
    {name:'Email', adress :'mailto:talazina@gmail.com'}];
    const displayLinks = arrLinks.map((val, i) => {
    	return <div className="col-xs-12  col-sm-2 links" key = {i}><a href = {val.adress} >{val.name}</a></div>
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
