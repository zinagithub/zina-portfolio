import React from 'react';
import { useState } from 'react';

import Project from './project';
import './projects.css';
import './skills.css';


import HOMES from './img/homes.png';
import BookStore from './img/bookstore.png';
import RailsBook from './img/railsbook.png';
import Battleship from './img/battleship.png';
import image2 from './img/calculator.png';
import image4 from './booking-mobile.png';


function Projects(){
	const [projects, setProjects] = useState([
        {
          name: 'Houses', 
          description: 'A real estate concept design created using CSS and React. Based off of Dribble Real Advisor Homepage Exploration 02 design by Jakub Reis.',
          img:HOMES,
          href1 : 'https://github.com/zinagithub/homes',
          href2 : 'http://zinagithub.github.io/homes'
        },
        {
          name: 'Booking-Mobile', 
          description: 'Clone of a Yacht Booking Mobile First Dribble design, designed by Valentine Boyev for Halo Lab,using HTML-CSS',
          img:image4,
          href1 : 'https://github.com/zinagithub/booking-mobile',
          href2 : 'https://zinagithub.github.io/booking-mobile/'
        },
        {
          name: 'Calculator', 
          description: 'Calculator app where functionality are basically addition, subtraction, multiplication, division using the front-end framework React',
          img:image2,
          href1 : 'https://github.com/zinagithub/calculator-tool',
          href2 : 'https://calculator-tool.herokuapp.com/'
        },
        {
          name: 'Bookstore', 
          description: 'A bookstore app using React and Redux that allows users to keep track of their reading progress and sort their online libraries by genre and author',
          img:BookStore,
          href1 : 'https://github.com/zinagithub/bookstore',
          href2 : 'https://zinagithub.github.io/bookstore/'
        },
        {
          name: 'RailsBook', 
          description: 'Fully-featured social media app built with Ruby, Ruby on Rails, deploy at Heroku, where me and my partner had created systems that manage users, posts, and comments. ',
          img:RailsBook,
          href1 : 'https://github.com/zinagithub/odin_facebook',
          href2 : 'https://fd-railsbook.herokuapp.com/'
        },
        {
          name: 'Battleship', 
          description: "An online Battleship app that simulates the function of the original Battleship board game, allowing users to play against a computer until your opponent's ships are all sunk.", 
          img:Battleship,
          href1 : 'https://github.com/zinagithub/battleship',
          href2 : 'https://zinagithub.github.io/battleship/dist/'
        }
		  ]);

	return (
          <div className = 'container projects'>
          <h3 className = 'title'>Projects</h3>
          
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
