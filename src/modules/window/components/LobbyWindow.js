import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import Window from './../../../components/Window';
import Table from './../../../components/Table';
import Flex from './../../../components/Flex';
import Button from './../../../components/Button';
import Display from './../../../components/Display';

// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en';

// Add locale-specific relative date/time formatting rules.
TimeAgo.locale(en);

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US');
const options = {
  gradation: [
    {
      factor: 1,
      unit: 'second'
    },
    {
      threshold: 59.5,
      factor: 60,
      unit: 'minute'
    },
    {
      threshold: 59.5 * 60,
      factor: 60 * 60,
      unit: 'hour'
    }
  ]
};

class LobbyWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { users: this.props.users };
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const users = this.props.users.map(user => {
      return Object.assign({}, user, {
        joined: timeAgo.format(user.joined, options)
      });
    });
    this.setState({ users });
  }

  render() {
    const { gameName, startGame, quitGame } = this.props;
    return (
      <Window>
        <Display>{gameName}</Display>
        <Table rows={this.state.users} />
        <Flex justifyContent="space-between">
          <Button label="quit" className="Flat" onClick={quitGame} />
          <Button
            //   disabled={!isValid}
            label="Start"
            className="Raised"
            onClick={startGame}
          />
        </Flex>
      </Window>
    );
  }
}

LobbyWindow.propTypes = {
  gameName: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  startGame: PropTypes.func,
  quitGame: PropTypes.func
};

export default LobbyWindow;
