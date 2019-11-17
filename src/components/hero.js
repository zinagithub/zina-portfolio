import React from 'react';
import './hero.css'



class Hero extends React.Component {

  render() {
  	const backHero = {
  		//backgroundColor : "#f39c12",
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

export default Hero;
