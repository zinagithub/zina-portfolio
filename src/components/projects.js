import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';
import image from './food.jpg';


function Projects(){
	const [projects, setProjects] = useState([
        {name: 'Tic-Tac-Toe', description: 'Tic-Tac-Toe Game created with javascript',img:image},
        {name: 'BattleShip', description: 'Simple javascript BattleShip game',img:image},
        {name: 'Facebook', description: 'RoR prject',img:image},
        {name: 'Bookstore', description: 'React javascript store books project',img:image}
		  ]);

	return (
       <div className='projects'>
          {projects.map(prj => (
             <Project name={prj.name} description= {prj.description} img = {prj.img} />
          	)
          	)}
       </div>
		)
}
export default Projects;
