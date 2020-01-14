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
	const [projects] = useState([
        {
          name: 'Houses', 
          description: "A real estate concept design created using CSS and React. Based off of Jakub Reis's Real Advisor Homepage Exploration 02 design, originally on Dribbble.",
          img:HOMES,
          href1 : 'https://github.com/zinagithub/homes',
          href2 : 'http://zinagithub.github.io/homes'
        },
        {
          name: 'Booking-Mobile', 
          description: 'Clone of a Yacht Booking mobile-first Dribbble design, designed by Valentine Boyev for Halo Lab,using HTML-CSS.',
          img:image4,
          href1 : 'https://github.com/zinagithub/booking-mobile',
          href2 : 'https://zinagithub.github.io/booking-mobile/'
        },
        {
          name: 'Calculator', 
          description: 'A calculator app built using the front-end framework React. Functionality includes basic arithmetic functions, such as addition, subtraction, multiplication, and division.',
          img:image2,
          href1 : 'https://github.com/zinagithub/calculator-tool',
          href2 : 'https://calculator-tool.herokuapp.com/'
        },
        {
          name: 'Battleship', 
          description: "An online Battleship app that simulates the function of the original Battleship board game, allowing users to play against a computer until your opponent's ships are all sunk.", 
          img:Battleship,
          href1 : 'https://github.com/zinagithub/battleship',
          href2 : 'https://zinagithub.github.io/battleship/dist/'
        },
        {
          name: 'Bookstore', 
          description: 'A bookstore app built using Javascript, React and Redux that allows users to keep track of their reading progress and sort their online libraries by genre and author.',
          img:BookStore,
          href1 : 'https://github.com/zinagithub/bookstore',
          href2 : 'https://zinagithub.github.io/bookstore/'
        },
        
        {
          name: 'RailsBook', 
          description: 'A full-featured social media app built with Ruby, Ruby on Rails, deployed on Heroku. Features include the ability to manage users, posts, and comments. Built with Filipp Dmytriyenko. ',
          img:RailsBook,
          href1 : 'https://github.com/zinagithub/odin_facebook',
          href2 : 'https://fd-railsbook.herokuapp.com/'
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
