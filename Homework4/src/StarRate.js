import React, { Component } from 'react';
import ReactStars from 'react-stars'

class StarRate extends Component {
    ratingChanged =  (value) => {  
        localStorage.setItem(this.props.name, value);
    }
    render () {
        return (        
            <div>
            <ReactStars 
            	count={5} 
            	value = {localStorage.getItem(this.props.name) !== undefined ? localStorage.getItem(this.props.name) : 0 }  
            	onChange={this.ratingChanged} 
            	size={24} 
            	color2={'#ffd700'} />
            </div>)
    }
}

export default StarRate;