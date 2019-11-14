import React from 'react';
import './navigation.css'

class Navigation extends React.Component {

  render() {
  	return (
  		 <nav>
  		    <h1 className = 'logo'>Zina</h1>
            <ul>
            	<li><a href = '#'>About</a></li>
            	<li><a href = '#'>Skils</a></li>
            	<li><a href = '#'>Projects</a></li>
            	<li><a href = '#'>Contact</a></li>
            </ul>
         </nav>
  		);
  }

}

export default Navigation;
