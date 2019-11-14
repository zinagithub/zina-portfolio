import React from 'react';
import './hero.css'



class Hero extends React.Component {

  render() {
  	const backHero = {
  		backgroundColor : "#f39c12",
  		height : '300px',
  	}
  	return (
  		 <div className = 'hero' style= {backHero}>
           <h1>Zina Protfolio</h1>
           <p>Front End - Back End - Devlopper</p>
  		 </div>
 		);
  }

}

export default Hero;
