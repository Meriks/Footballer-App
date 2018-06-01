import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import spinner from './logo.svg';
import PlayerList from './components/PlayerList';
import Player from './components/Player';
import { getPlayers, getPlayer } from './PlayerService';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: null,
      idToPlayerMap: {},
      error: null,
    }
  }

  renderList(props) {
    const { error, players } = this.state;

    if (error) {
      return this.renderError(error.message);
    }
    
    if (players) {
      return (<PlayerList players={players} />);
    }

    getPlayers()
      .then(players => this.setState({ players }))
      .catch(error => this.setState({ error }))

    return this.renderSpinner();
  }

  

  renderPlayer(props) {
    const { id } = props.match.params;
    const { error, players } = this.state;

    if (error) {
      return this.renderError(error.message);
    }
    
    if (this.state.idToPlayerMap[id]) {
      return (<Player player={this.state.idToPlayerMap[id]} />)
    }

    getPlayer(id)
      .then(player => 
        this.setState({ idToPlayerMap: {...this.state.idToPlayerMap, [id]: player}}))
      .catch(error => this.setState({ error }))

    return this.renderSpinner();
  }

  renderSpinner() {
    return (<img src={spinner} className="App-spinner" alt="spinner" />);
  }

  renderError(message) {
    return <div className="color-red">{message}</div>;
  }

  render() {
    return (
      <Router>
        <div className="layout center-block">
          <Route 
            exact path="/"
            render={props => this.renderList(props)}
          />
          <Route 
            path="/player/:id"
            render={props => this.renderPlayer(props)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
