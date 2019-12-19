import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';


import HOMES from './img/homes.png';
import BookStore from './img/bookstore.png';
import RailsBook from './img/railsbook.png';
import image2 from './img/calculator.png';
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
        {
          name: 'Calculator', 
          description: 'React Calculator project',
          img:image2,
          href1 : 'https://github.com/microverseinc/project-react-calculator/blob/master/README.md',
          href2 : 'https://calculator-tool.herokuapp.com/'
        },
        {
          name: 'Bookstore', 
          description: 'React javascript store books project',
          img:BookStore,
          href1 : 'https://github.com/microverseinc/project-redux-bookstore/blob/master/README.md',
          href2 : 'https://zinagithub.github.io/bookstore/'
        },
        {
          name: 'RailsBook', 
          description: 'Rails project simulating Facebook functionality ',
          img:RailsBook,
          href1 : 'https://www.theodinproject.com/courses/ruby-on-rails/lessons/final-project',
          href2 : 'https://fd-railsbook.herokuapp.com/'
        }
		  ]);

	return (
          <div className = 'container projects'>
          <h3 className = 'title1'>Projects</h3>
          <h2 className = 'title2'>Here Is Some Of My Projets</h2>
          {projects.map((prj,ind) => (
             <Project 
               key = {ind}
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
