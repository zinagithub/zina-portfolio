import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';


import HOMES from './img/homes.png';
import BookStore from './img/bookstore.png';
import image2 from './img/reading-about-code-on-hackernoon.jpg';
import image3 from './designecologist.jpg';
import image4 from './booking-mobile.png';


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
          name: 'Booking-Mobile', 
          description: 'Clone of a chosen dribble design with HTML-CSS',
          img:image4,
          href1 : 'https://dribbble.com/shots/8626937/attachments/884233?mode=media',
          href2 : 'https://zinagithub.github.io/booking-mobile/'
        },
        {name: 'Facebook', description: 'RoR prject',img:image2},
        {
          name: 'Bookstore', 
          description: 'React javascript store books project',
          img:BookStore,
          href1 : 'https://github.com/microverseinc/project-redux-bookstore/blob/master/README.md',
          href2 : 'https://zinagithub.github.io/bookstore/'
        }
		  ]);

	return (
          <div className = 'container projects'>
          <h3 className = 'title1'>Projects</h3>
          <h2 className = 'title2'>Here Is Some Of My Projets</h2>
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
