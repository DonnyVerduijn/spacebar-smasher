import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Table from './../../../components/Table';

class AvailableGameWindow extends Component {
  componentDidMount() {
    this.props.getAvailableGames();
  }

  render() {
    const { games } = this.props;
    return (
      <Window>
        <Table rows={games} />
      </Window>
    );
  }
}

AvailableGameWindow.propTypes = {
  getAvailableGames: PropTypes.func,
  games: PropTypes.array
};

export default AvailableGameWindow;
