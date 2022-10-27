import { Component } from "react";
import Card from "../card/card.component.jsx";

import './card-list.styles.css'

class CardList extends Component {
    

    render(){
        console.log("cardlist render");
        const { monsters } = this.props;
        console.log(monsters);
        return(
            <div className="card-list">
                {monsters.map((monster) => 
                {
                   return <Card key={monster.id} item={monster} />
                })}
            </div>
        )
    }
}

export default CardList;