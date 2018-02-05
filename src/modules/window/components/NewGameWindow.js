import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';

class NewGameWindow extends Component {
  componentDidMount() {
    this.props.instantiateGame();
  }

  render() {
    const {
      confirmGame,
      validateGame,
      previousWindow,
      game
    } = this.props;
    return (
      <Window>
        <TextBox
          label="gamename:"
          isValid={game.isValid}
          isValidated={game.isValid || game.isValidated}
          autoFocus={true}
          value={game.name}
          onChange={validateGame}
        />
        <Flex justifyContent="space-between">
          <Button label="back" className="Flat" onClick={previousWindow} />
          <Button
            disabled={!game.isValid || game.name.length === 0}
            label="next"
            className="Raised"
            onClick={() => confirmGame(game.name)}
          />
        </Flex>
      </Window>
    );
  }
}

NewGameWindow.propTypes = {
  instantiateGame: PropTypes.func,
  previousWindow: PropTypes.func,
  confirmGame: PropTypes.func,
  validateGame: PropTypes.func,
  game: PropTypes.object
};

export default NewGameWindow;
