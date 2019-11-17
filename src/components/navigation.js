import React from 'react';
import './navigation.css'

class Navigation extends React.Component {

  render() {
  	const arrLinks = ['About','Skills','Projects','Contact'];
    const displayLinks = arrLinks.map((val, i) => {
    	return <li key = {i}><a href = {'#' + val} >{val}</a></li>
    }

    ); 
  	return (
  		 <nav>
  		    <h1 className = 'logo'><span className = 'zLetter'>Z</span>
                                 <span className = 'iLetter'>i</span>
                                 <span className = 'nLetter'>n</span>
                                 <span className = 'aLetter'>a</span>
          </h1>
            <ul>
            	{displayLinks}
            </ul>
         </nav>
  		);
  }

}

export default Navigation;
