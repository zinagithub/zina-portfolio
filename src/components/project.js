import React from 'react';
import './projects.css';


function Project(props){
	return (
		<div>
		   
		     <div className = 'col-sm-12 col-md-6  '>
		       <div className = 'project'>
		         <img src = {props.img} alt = {props.name} width = "100%" height="300" />
                 <h3>{props.name}</h3>
                 <p>{props.description}</p>
                 <div className='linksPrj'>
                  <a href={props.href1} target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={props.href2} target="_blank" rel="noopener noreferrer">Live</a>
               </div>
               </div>

		     </div>
		  
		     
		</div>
		)
}

export default Project;