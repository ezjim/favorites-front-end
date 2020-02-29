import React, { Component } from 'react'
// import Item from './Item'

export default class List extends Component {
    render() {
        return (
            <div className="item-box">
                {
                    this.props.characters.map(char => <div className="char-box">
                      <h2>  {char.name}</h2>
                    <img className="img-box" src={char.image} alt="" ></img>
                    <p> {char.status}</p>
                    <p> {char.species}</p>
                    
                    </div>)
                }
                {/* <Item /> */}
            </div>
        )
    }
}

















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