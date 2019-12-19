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
  		    <h1 className = 'logo'><span className = 'zLetter'>Z</span>
                                 <span className = 'iLetter'>i</span>
                                 <span className = 'nLetter'>n</span>
                                 <span className = 'aLetter'>a</span>
          </h1>
            <ul className="hidden-xs">
            	{displayLinks}
            </ul>
         </nav>
  		);
  }

}

export default Navigation;
