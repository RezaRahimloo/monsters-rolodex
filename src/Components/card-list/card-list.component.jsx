import { Component } from "react";

class CardList extends Component {
    

    render(){
        console.log("cardlist render");
        const { monsters } = this.props;
        console.log(monsters);
        return(
            <div>
                {monsters.map((monster) => (<h1 key={monster.id}>{monster.name}</h1>))}
            </div>
        )
    }
}

export default CardList;