import React from 'react';
import './projects.css';


function Project(props){
	return (
		<div>
		   
		     <div className = 'col-sm-12 col-md-6 col-lg-4 '>
		       <div className = 'project'>
		       <img src = {props.img} alt = {props.name} width = '90%' height = '80%'/>
               <h3>{props.name}</h3>
               <p>{props.description}</p>
               </div>
		     </div>
		  
		     
		</div>
		)
}

export default Project;