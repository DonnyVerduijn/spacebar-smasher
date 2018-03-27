import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Table from './../../../components/Table';

class AvailableGameWindow extends Component {
  componentDidMount() {
    this.props.getAvailableGames();
  }

  render() {
    const { games, joinGame } = this.props;
    console.log(games);
    return (
      <Window>
        <Table
          rows={games.map(game => ({
            name: game.name,
            users: game.joinedUsers.length
          }))}
          onClick={index => {
            joinGame(games[index].id);
          }}
        />
      </Window>
    );
  }
}

AvailableGameWindow.propTypes = {
  getAvailableGames: PropTypes.func,
  games: PropTypes.array,
  joinGame: PropTypes.func
};

export default AvailableGameWindow;
