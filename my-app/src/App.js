import  React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Compos/Search';
import Favorites from './Compos/Favorites';
import Header from './Compos/Header'

export default class App extends Component {
  // state = { user: null };

  // setUser => user {
  //   this.setState({ user: user });
  // }
  render() {
    return (
      <div className="App">
        <Header />
            <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/" component={Favorites} />
        </Switch>

             </BrowserRouter>
    </div>
  );
}
}


