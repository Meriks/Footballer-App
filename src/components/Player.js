import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Player extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className="">
        <Link to="/" className="pure-button full-width center shadow bg-white round margin-top"> Back To All Players</Link>
        <div className="container center-block card shadow round">
          <h1 className="">{player.name}</h1>
          <hr/>
          <table className="full-width">
            <tbody>
              <tr>
                <td>Ranking:</td>
                <td>{player.ranking}</td>
              </tr>
              <tr>
                <td>Goals:</td>
                <td>{player.goal}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{player.age}</td>
              </tr>
              <tr>
                <td>Height:</td>
                <td>{player.height} cm</td>
              </tr>
              <tr>
                <td>Position:</td>
                <td>{player.positionText}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Player;