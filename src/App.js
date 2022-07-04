import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import  SearchBox  from './components/search-box/Search-box.component.jsx';

import './App.css';

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      monsters: [],
      searchFields: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) =>{ 
    this.setState({searchFields :e.target.value })
  }

  render() {
    const { monsters, searchFields } = this.state
    const monstersFilter = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFields.toLowerCase()))
    return (
      <div className="App bg-gradient-to-r from-sky-500 to-blue-900">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" 
          handleChange={ this.handleChange } 
        />
        <CardList monsters={monstersFilter} />
      </div>
    )
  }
  
}

export default App;

