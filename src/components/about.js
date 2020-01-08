import React from 'react';
import {Link} from "react-router-dom";
import './about.css'



class About extends React.Component {

  render() {
  	const backHero = {
      backgroundColor : "#1dd1a1",
  		height : '480px',
  	}

  	return (
      
  		 <div className = 'hero' style= {backHero}>
        <div className = 'container'>
           <h1 className = 'herTitle'>Hi,</h1>
           <h1 className="parag">I’m Zina Talaa, a software engineer and web developer living
            in <a href =  'https://en.wikipedia.org/wiki/Algeria' target="_blank">ALGERIA</a>, looking for my next Front-end position.</h1>
           <Link to="/contact">
             <button className="btn btn-primary btn-lg">Contact</button>
           </Link>
  		  </div> 
       </div>
 		);
  }

}

export default About;
