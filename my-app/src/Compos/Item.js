import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                
                 <li className="thislist">
                    <h2><span className="name-box">{this.props.char.name}</span></h2>
                    <img className="img" src={this.props.char.image} alt="" />
                   
                    <p>STATUS: {this.props.char.status}</p>
                    <p>RACE: {this.props.char.race}</p>
                    
                </li>   
                
            </div>
        )
    }
}
