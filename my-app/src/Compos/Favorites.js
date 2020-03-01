import React, { Component } from 'react'
import List from './List'
import request from 'superagent'

export default class Favorites extends Component {
    state= {
        characters: []
    }
    componentDidMount = async () => {
        const faves = await request.get('http://localhost:3000/api/me/favorites')
        .set('Authorization', this.props.user.token);

        this.setState({ chars: faves.body })
    }

    render() {
        return (
            <div>
                <List characters={ this.state.chars }/>
            </div>
        )
    }
}
