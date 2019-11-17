import React from 'react';
import './skills.css'

class Skills extends React.Component {

  render() {
  	
  	return (
  		 <div className = 'skills'>
            <h3 className = 'title1'>Skills</h3>
            <h2 className = 'title2'>Here is my Skills</h2>
            <div className = 'row'>
              {
              arrIcons.map((elm, index) => {
              
               return (<Icons key = {index} myIcon = {elm.icon}   myTitle= {elm.title} 
                             desc = {elm.description} />)
              })  
              }
            </div>
  		 </div>
 		);
  }

}


const arrIcons = [
  {
    icon : <i className="fa fa-html5"></i>,
    title: 'HTML5',
    description : 'Hyper text markup luanguage' 
  },
  {
    icon : <i className="fa fa-css3"></i>,
    title: 'CSS3',
    description : 'Hyper text markup luanguage'
  },
  {
    icon : <i className="fa fa-html5"></i>,
    title: 'HTML5',
    description : 'Hyper text markup luanguage' 
  },
  {
    icon : <i className="fa fa-css3"></i>,
    title: 'CSS3',
    description : 'Hyper text markup luanguage'
  }
   
];


class Icons extends React.Component {

  render() {
      return (
        <div>
            <span>{this.props.myIcon}</span>
            <h4>{this.props.myTitle}</h4>
            <p>{this.props.desc}</p>
        </div>

        );
    }

}

export default Skills;
