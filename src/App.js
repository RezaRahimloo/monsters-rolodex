import { useState, useEffect } from 'react';

import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => { return result.json();})
      .then((users) => {setMonsters(users);});}, []);

  

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  

  const onSearchChange = (event) => { 
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  

  return (
    <div key={"1"} className="App">
      <h1 className='app-title'>Murder</h1>
      <SearchBox 
        className="monsters-search-box" 
        onChangeHandler= {onSearchChange} 
        placeholder="Search monsters"/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchValue: ""
//     };
//   }
  
//   async componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((result) => {
//         console.log(result);
//         return result.json();
//       })
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//         )
//       });
      
//   }

//   onSearchChange = (event) => { this.setState(() => { return { searchValue: event.target.value.toLowerCase()} }) }

//   render() {
  
//     const { monsters, searchValue } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue));

//     return (
//       <div key={"1"} className="App">
//         <h1 className='app-title'>Murder</h1>
//         <SearchBox className="monsters-search-box" onChangeHandler= {onSearchChange} placeholder="Search monsters"/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
