import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';
import HOMES from './img/homes.png';
import image1 from './food.jpg';
import image2 from './reading-about-code-on-hackernoon.jpg';
import image3 from './designecologist.jpg'


function Projects(){
	const [projects, setProjects] = useState([
        {
          name: 'Houses', 
          description: 'Clone of a chosen dribble design with React',
          img:HOMES,
          href1 : 'https://dribbble.com/shots/8214828-Real-Advisor-Homepage-Exploration-02/attachments/589156?mode=media',
          href2 : 'http://zinagithub.github.io/homes'
        },
        {
          name: 'Houses', 
          description: 'Clone of a chosen dribble design with React',
          img:HOMES,
          href1 : 'https://dribbble.com/shots/8214828-Real-Advisor-Homepage-Exploration-02/attachments/589156?mode=media',
          href2 : 'http://zinagithub.github.io/homes'
        },
        {name: 'Facebook', description: 'RoR prject',img:image2},
        {name: 'Bookstore', description: 'React javascript store books project',img:image3}
		  ]);

	return (
          <div className = 'container projects'>
          {projects.map(prj => (
             <Project 
               name={prj.name} 
               description= {prj.description} 
               img = {prj.img}
               href1 = {prj.href1}
               href2 = {prj.href2} 
             />
          	)
          	)}
         </div>
		)
}
export default Projects;
