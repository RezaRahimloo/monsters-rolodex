import { Component } from 'react';

import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchValue: ""
    };
  }
  
  async componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        console.log(result);
        return result.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      });
      
  }

  onSearchChange = (event) => { this.setState(() => { return { searchValue: event.target.value.toLowerCase()} }) }

  render() {
  
    const { monsters, searchValue } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue));

    return (
      <div key={"1"} className="App">
        <SearchBox className="search-box" onChangeHandler= {onSearchChange} placeholder="Search monsters"/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
