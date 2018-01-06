import React, { Component } from 'react';
import './App.css';
import './Triangles.svg';


import { Link}  from 'react-router-dom';

class Artist extends Component {

  render() {
    let {artist, params} = this.props;
        console.log(artist[0].name);
        
      return (

        <div>
          <h1> {artist[0].name}'s  albums :</h1>
          <div>
              {        
                artist[0].album.map((item, index) => 
                      {
                      let link = `${params.url}/${index}`; 
                      console.log(item.compositions);    
                      return  (
                        <div key={index}> 
                        <Link  className="navigateLinks" to={link}>{item.name} - {item.compositions.length} songs;  
                        {parseInt(item.compositions.reduce((sum, current) => {

                          let timeSong = current.duration.split(':');
                          sum+=60*(+timeSong[0]) + (+timeSong[1]);
                          return sum;
                        }, 0)/60)} min.
                        </Link> 
                        </div> )
                      })      
              } 
              <Link className="navigateLinks back" to={'/list'}> Back to musician list</Link>      
          </div>
        </div>
      );
  }
}

export default Artist;