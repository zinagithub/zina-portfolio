import React from 'react';
import './projects.css';


function Project(props){
	return (
		<div>
		   
		     <div className = 'col-sm-12 col-md-6  '>
		       <div className = 'project'>
		       <img src = {props.img} alt = {props.name} className="img-responsive" />
               <h3>{props.name}</h3>
               <p>{props.description}</p>
               </div>
		     </div>
		  
		     
		</div>
		)
}

export default Project;