import React from 'react';
import './about.css'



class About extends React.Component {

  render() {
  	const backHero = {
      backgroundColor : "#1dd1a1",
  		height : '550px',
  	}

  	return (
      
  		 <div className = 'hero' style= {backHero}>
        <div className = 'container'>
           <h1 className = 'herTitle'>About Me</h1>
           <h1 className="parag">I’m Zina Talaa, a software engineer and web developer living
            in <a>ALGERIA</a>, looking for Front-End postion.
           </h1>
           
  		 </div>
       <button className="btn btn-primary btn-lg">Contact</button>
       </div>
 		);
  }

}

export default About;
