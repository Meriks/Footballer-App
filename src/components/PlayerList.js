import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PlayerList extends Component {

  renderList(players) {
    return this.props.players.map(player => 
      (<li key={player.id} className="">
        <Link to={`/player/${player.id}`} 
          className="list-item">
          {player.name}
        </Link>
      </li>)
    );
  }

  render() {
    const listItems = this.renderList();
    
    return (
        <ul className="bg-white shadow">{listItems}</ul>
    );
  }
}

export default PlayerList;