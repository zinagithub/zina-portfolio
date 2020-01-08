import React from 'react';
import HTML from './img/html.png';
import CSS from './img/css.png';
import JS from './img/js.png';
import REACT from './img/react.png';
import RUBY from './img/ruby.jpeg';
import RAILS from './img/rails.png';
import './skills.css';


class Skills extends React.Component {

  render() {
  	
  	return (
  		 <div className = 'skills'>
            <h3 className = 'title'>Skills</h3>
            <div className = 'container'>
            <div className = 'row'>
            
              {

              arrIcons.map((elm, index) => {
              
               return (<Icons key = {index} myIcon = {elm.icon} altTxt={elm.alt}  myTitle= {elm.title}  />)
              })  
              }
             
            </div> 
            </div>
  		 </div>
 		);
  }

}


const arrIcons = [
  {
    icon : HTML,
    alt  :'HTML Icon',
    title: 'HTML5',
    description : 'Hyper text markup luanguage' 
  },
  {
    icon : CSS,
    alt  : 'CSS Icon',
    title: 'CSS3',
    description : 'Hyper text markup luanguage'
  },
  {
    icon : JS,
    alt  : 'Javascript Icon',
    title: 'Javascript',
    description : 'Hyper text markup luanguage' 
  },
  {
    icon : REACT,
    alt  :'React Icon',
    title: 'React',
    description : 'Hyper text markup luanguage'
  },
  {
    icon : RUBY,
    alt  : 'Ruby Icon',
    title: 'Ruby',
    description : 'Hyper text markup luanguage'
  },
  {
    icon : RAILS,
    alt  : 'Rails Icon',
    title: 'Rails',
    description : 'Hyper text markup luanguage'
  }
   
];


class Icons extends React.Component {

  render() {
      return (
        <div className = 'col-xs-6 col-sm-4 col-md-4'>
            <img 
              src={this.props.myIcon} 
              alt={this.props.altTxt}
              width="100" 
              height="100" 
              className ="img-rounded"
            />
            <h4>{this.props.myTitle}</h4>
            <p>{this.props.desc}</p>
        </div>

        );
    }

}

export default Skills;
