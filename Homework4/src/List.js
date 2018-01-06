import React, { Component } from 'react';
import './App.css';


import { Link} from 'react-router-dom';
class List extends Component {



  render() {
    let {myMusic} = this.props;
        return (
            <div>
              <h1>List of musician</h1>
              <div>
                  {        
                      myMusic.map((item, index) => {
                          let link = '/list/' + item.name;  
                          return  <Link key={index} className="navigateLinks" to={link}>{item.name}</Link>
                          })               
                  }     
              </div>
            </div>
          );
  }
}

export default List;