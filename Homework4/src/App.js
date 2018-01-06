import React, { Component } from 'react';
import './App.css';
import List from './List';
import Musician from './Musician';
import Album from './Album';
import Loading from './Loading';



import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const supportsHistory = 'pushState' in window.history;


class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      musicList: []
  }
}


  componentDidMount(){

    fetch("http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=1").then(function(response) {
    return response.json();
    }).then(data => {
      console.log(data);
      this.setState({musicList: data});   
    });
  }

  render(){
    if (this.state.musicList.length !== 0) {
          return(
            <BrowserRouter basename="/" forceRefrech={!supportsHistory}>
              <div>
                <Switch>
                        
                        <Route path="/list" exact render={() => {             
                            return <List myMusic={this.state.musicList} />
                        }
                        } />   
                        <Route path="/list/:name" exact render={({match}) => { 
                          let art = this.state.musicList.filter( (item) => { 
                            return item.name == match.params.name
                          });
                            return <Musician  artist={art} params={match}/>
                        }
                        } />  
                        <Route path="/list/:name/:album" exact render={({match}) => { 
                            console.log(match);
                          let art = this.state.musicList.filter( (item) => { 
                            return item.name == match.params.name
                          }); 
                          console.log(art[0].album);
                          
                            return <Album album={art[0].album[match.params.album]} params={match}/>
                        }
                        } />  
                        <Redirect from='/' to='/list'/>
                       
                </Switch>
              </div>
            </BrowserRouter>
          )
    } else {
      return (<Loading/> )
    }
  }
}



export default App;
