import React, { Component } from 'react'
import List from './List'
import request from 'superagent'

export default class Search extends Component {
    state = {
        characters: [],
        favorites: [],
        input: '',
    }

    componentDidMount = async () => {
        const faves = await request.get('http://localhost:300/api/me/favorites')
        .set('Authorization', this.props.user.token);
         
        //fetch faves on mount , to starr them or make a fave button
        this.setState({ favorites: faves.body})
    }

    handleSearch = async (e) => {
        e.preventDefault() ;
        //fetch data for search        
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name/?search=${this.state.input}`)

        console.log(data.body)

        this.setState({
            characters: data.body.results,
            loading: false
        });
    }

    render() {
        return (
            <div>
            {/* on submit, call the handlSearch function */}
            <form onSubmit={this.handleSearch}>
            {/* on change, update the input in state */}
            <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
            {/* disable the button if loading */}
            <button disabled={this.state.loading}>Search!</button>
            </form>
                {
                    this.state.loading
                    ? "loading!!"
                    : <List characters={this.state.characters}
                            favorites={this.state.favorites}
                                user={this.props.user} />
                }
            </div>
        )
    }
}
