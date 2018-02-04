import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';

const NewGameWindow = ({
  createGame,
  validateGame,
  previousWindow,
  name,
  isValid
}) => {
  return (
    <Window>
      <TextBox
        label="gamename:"
        isValid={isValid}
        autoFocus={true}
        value={name}
        onChange={validateGame}
      />
      <Flex justifyContent="space-between">
        <Button label="back" className="Flat" onClick={previousWindow} />
        <Button
          disabled={!isValid}
          label="next"
          className="Raised"
          onClick={() => createGame(name)}
        />
      </Flex>
    </Window>
  );
};

NewGameWindow.propTypes = {
  previousWindow: PropTypes.func,
  createGame: PropTypes.func,
  validateGame: PropTypes.func,
  name: PropTypes.string,
  isValid: PropTypes.bool
};

export default NewGameWindow;
