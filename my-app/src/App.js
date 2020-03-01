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
import PrivateRoute from './Compos/PrivateRoute';
import Login from './Compos/Login'


export default class App extends Component {
  state = { user: null };
  setUser = user => {
    this.setState({ user: user.body });
}

  // setUser => user {
  //   this.setState({ user: user });
  // }
  render() {
    console.log(this.state)
    return (
      <div className="App">
      <BrowserRouter>
          <Header />  
          
        <Switch>

        <PrivateRoute exact path="/" component={Search} user={this.state.user} />
        <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user} />

        <Route exact path="/" component={Search} user={this.state.user} />
        <Route path="/" component={Favorites} user={this.state.user} />
        <Route exact path="/login" render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user }/>} />
      

        </Switch>

      </BrowserRouter>
    </div>
  );
}
}


