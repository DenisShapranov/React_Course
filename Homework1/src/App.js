import React, { Component } from 'react';
import jsonData from './jsonData.json';
import './main.css';

class ListItem extends Component {

state = {
    viewPhone: false
  }
  changeState = (event) => {
    let v_p = this.state.viewPhone === true ? false : true;
    this.setState({ viewPhone: v_p });
  }

  render(){
    let { name, phone } = this.props.item; 
    return(
      <div className= "myList__Item" >
      
      <div>{name}</div>
      <div className={
        this.state.viewPhone === true ? "seen" : "notSeen"}>{phone}</div>

      <div> <button onClick={this.changeState}>look phone</button></div>
      </div>
    )}
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: jsonData,
    };
  }
  handleChange = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let renderContacts = jsonData.filter( (item) => {
      let itemName = item.name.toLowerCase();
      return ~itemName.indexOf(searchQuery) ;
    });
    this.setState({ contacts: renderContacts});
    console.log( renderContacts );
  }

  render() {
    let{contacts, counter } = this.state;
    return (
      <div className="App">
         <h1 >My first  app</h1>
         <input onChange={this.handleChange}/>
        { contacts.lengts !== 0 ?
          contacts.map((item, asdasd) => {
            return(
               <ListItem key={asdasd} item={item} />
            );
          }): (<div> Not found </div>)
        }   
         
      </div>
    );
  }
}

export default App;
