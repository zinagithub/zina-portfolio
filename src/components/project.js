import React from 'react';
import './projects.css';


function Project(props){
	return (
		<div className='project'>
		   <img src = {props.img} alt = {props.name} width = '200' height = '100'/>
           <h3>{props.name}</h3>
           <p>{props.description}</p>  
		</div>
		)
}

export default Project;