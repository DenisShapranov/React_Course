import React, { Component } from 'react';
import './App.css';
import { Link}  from 'react-router-dom';
import StarRate from './StarRate'




class Album extends Component {
 


  render() {
    let {album, params} = this.props;  
    console.log(album); 
    console.log(params.params.name); 
    
      return (
      <div>
        <h1> {album.name}</h1>
        <div>
              {       
               album.compositions.map((item, index) => {       
                      return (
                        <div  className="compositionName" key={index}> {item.name}
                        <StarRate name={item.name}/>
                        </div>)
                      })      
              }  

              <Link className="navigateLinks back" to={'/list/'+params.params.name}> Back to musician</Link>   
        </div>
      </div>
    );
  }
}

export default Album;
