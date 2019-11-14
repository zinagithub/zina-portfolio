import React from 'react';
import './navigation.css'

class Navigation extends React.Component {

  render() {
  	const arrLinks = ['About','Skils','Projects','Contact'];
    const displayLinks = arrLinks.map((val, i) => {
    	return <li key = {i}><a href = {'#' + val} >{val}</a></li>
    }

    ); 
  	return (
  		 <nav>
  		    <h1 className = 'logo'>Zina</h1>
            <ul>
            	{displayLinks}
            </ul>
         </nav>
  		);
  }

}

export default Navigation;
