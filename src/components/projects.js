import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';
import image1 from './food.jpg';
import image2 from './reading-about-code-on-hackernoon.jpg';
import image3 from './designecologist.jpg'


function Projects(){
	const [projects, setProjects] = useState([
        {name: 'Tic-Tac-Toe', description: 'Tic-Tac-Toe Game created with javascript',img:image1},
        {name: 'BattleShip', description: 'Simple javascript BattleShip game',img:image1},
        {name: 'Facebook', description: 'RoR prject',img:image2},
        {name: 'Bookstore', description: 'React javascript store books project',img:image3}
		  ]);

	return (
          <div className = 'container projects'>
          {projects.map(prj => (
             <Project name={prj.name} description= {prj.description} img = {prj.img} />
          	)
          	)}
         </div>
		)
}
export default Projects;
