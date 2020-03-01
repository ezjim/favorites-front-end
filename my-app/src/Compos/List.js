import React, { Component } from 'react'
import request from 'superagent'
import { withRouter } from 'react-router-dom';
// import Item from './Item'

export default withRouter  (class List extends Component {

    heartIt = async (char) => {

        console.log('List', this.props);

    const fave = await request.post('http://localhost3000/api/me/favorites',
     {
        name: char.name,
        image: char.image,
        status: char.status,
        species: char.species,
    })
    .set('Authorization', this.props.user.token)
    }
    console.log('fave', fave.body);

    renderButtonOrHeart = (char) => {
        // check favs list if were on the search page
        const IsOnFaveList = this.props.favorites.find(
            person=> char.name === person.name);
            if (!IsOnFaveList){
            // if not a fave, give option to heart
                
            // we are ittering through a list, and we need the item in a function, so we make it an anonymous function,
            return <button onClick={ (e) => this.heartIt(char)}>Heart it</button>
            }
            return <span>&#x2665;</span>
    }
    
    render() {
        // console.log('url', this.props)
        return (
            <div className="item-box">
                {
                    this.props.characters.map(char => <div className="char-box">
                    <h2> {char.name} </h2>
                    <img className="img-box" src={char.image} alt="" ></img>
                    <p> {char.status}</p>
                    <p> {char.species}</p>
                    
                    {
                    this.props.location.pathname !== '/favorites' 
                        // only render a button or star on the search page
                    && this.renderButtonOrHeart(char)
                    }
                    </div>)
                }
                {/* <Item /> */}
            </div>
        )
    }
})

















// import React, { Component } from 'react'
// import Item from './Item'

// export default class List extends Component {
//     render() {
//         const { characters } = this.props;
//         const charactersItems = characters.map(char => <Item characters={characters}/>)

//         return (
//             <div>
//                 {charactersItems}
//             </div>
//         )
//     }
// }

// {
//     this.props.characers.map(char => <div className="char-box">
//         {char.name}
//         </div>)
// }