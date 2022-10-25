import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    };
    console.log("constructor");
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
          },
          () => console.log(this.state)
        )
      });
      console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div key={"1"} className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters'
          onClick={(event) => { console.log(event.target.value); }} />
        {
          this.state.monsters.map(monster =>  { 
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
              )
            })
        }
      </div>
    );
    
  }
  
}

export default App;
