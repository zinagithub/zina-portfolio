import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css'

class Navigation extends React.Component {

  render() {
  	const arrLinks = ['Home','About','Skills','Projects','Contact'];
    const navColor = {color : '#212529'};
    const displayLinks = arrLinks.map((val, i) => {
    	return <Link to = {'/' + val} style = {navColor} key = {i} ><li>{val}</li> </Link>
    }

    ); 
  	return (
  		 <nav>
  		      <img src= "logo.svg" alt= "zina logo" width='100' height= '100'/>
            <ul>
            	{displayLinks}
            </ul>
         </nav>
  		);
  }

}

export default Navigation;
