import React from 'react';
import {Link} from "react-router-dom";
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
            in <a href =  "https://en.wikipedia.org/wiki/Algeria">ALGERIA</a>, looking for Front-End position.
           </h1>
           
  		 </div>
       <Link to="/contact">
       <button className="btn btn-primary btn-lg">Contact</button>
       </Link>
       </div>
 		);
  }

}

export default About;
