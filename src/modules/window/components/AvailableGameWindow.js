import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Table from './../../../components/Table';
import Flex from './../../../components/Flex';
import Button from './../../../components/Button';

class AvailableGameWindow extends Component {
  componentDidMount() {
    this.props.getAvailableGames();
  }

  render() {
    const { games, previousWindow, joinGame } = this.props;
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
         <Flex justifyContent="space-between">
          <Button
            className="Flat"
            label={'back'}
            onClick={previousWindow}
          />
          <Button
            label="new Game"
            className="Raised"
            onClick={previousWindow}
          />
        </Flex>
      </Window>
    );
  }
}

AvailableGameWindow.propTypes = {
  getAvailableGames: PropTypes.func,
  games: PropTypes.array,
  joinGame: PropTypes.func,
  previousWindow: PropTypes.func
};

export default AvailableGameWindow;
