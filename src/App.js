import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: {firstName: "Murder", lastName: "R"},
      company: 'IPPV'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}.</p>
          <button onClick={() => {
            // Shallow merge
            this.setState( 
              () => {
                return { name: {firstName: "Reza", lastName: "Rahimloo"} } 
              }
              , () => {
                console.log(this.state);
            }); // find any name in this object and update state value
            
          }} >Change name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
