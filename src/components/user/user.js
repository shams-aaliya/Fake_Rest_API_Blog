import React, { Component } from 'react';
import Display from './display';
import SearchBox from '../search-box/search-box';
class user extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }
  render() {
    console.log(this.state.users);

    const { users, searchField } = this.state;
    const filteredusers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1>KINDA BLOG</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <Display users={filteredusers} />
      </div>
    );
  }
}
export default user;
