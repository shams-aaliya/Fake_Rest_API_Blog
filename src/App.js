import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import User from './components/user/user';
import post from './components/post/post';
import SinglePost from './components/post/SinglePost';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={User} />
            <Route exact path='/post/:id' component={post} />
            <Route exact path='/single_post/:id' component={SinglePost} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
