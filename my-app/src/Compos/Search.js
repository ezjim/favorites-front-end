import React, { Component } from 'react'
import List from './List'
import request from 'superagent'

export default class Search extends Component {
    state = {
        characters: [],
        input: '',
    }
    handleSearch = async (e) => {
        e.preventDefault() ;
        // const data = await request.get(`https://rickandmortyapi.com/api/character/?name={this.state.input}`)
        
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name/?search=${this.state.input}`)
        console.log(data.body)
        this.setState({
            characters: data.body.results,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>   
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.handleSearch}>Search</button>
                <List characters={this.state.characters} />
                </form>
                {
                    this.state.loading
                    ? "loading!!"
                    :<List characters={this.state.characters} />
                }
            </div>
        )
    }
}
