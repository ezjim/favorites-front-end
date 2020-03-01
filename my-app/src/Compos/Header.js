import React, { Component } from 'react'
import { Link }  from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                RICK AND MORTY FAVES
            <Link to="/favorites">Favorites</Link>
            <Link to="/">Search</Link>
            <Link to="/login">Login</Link>
            </div>

        )
    }
}
