import React from 'react';
import './about.css'



class About extends React.Component {

  render() {
  	const backHero = {
      backgroundColor : "#1dd1a1",
  		height : '400px',
  	}
  	return (
  		 <div className = 'hero' style= {backHero}>
           <h1 className = 'herTitle'>Zina Protfolio</h1>
           <p>Front End - Back End - Devlopper</p>
           <a href = "#">Contact</a>
  		 </div>
 		);
  }

}

export default About;
