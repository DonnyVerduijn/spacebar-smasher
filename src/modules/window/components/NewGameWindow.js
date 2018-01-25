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
  switchWindow,
  name,
  isValid
}) => {
  console.log(name);
  return (
    <Window>
      <Label>gamename:</Label>
      <TextBox
        value={name}
        onChange={validateGame}
      />
      <Flex justifyContent="space-between">
        <Button
          label="back"
          className="Flat"
          onClick={switchWindow}
        />
        <Button
          disabled={!isValid}
          label="next"
          className="Raised"
          onClick={createGame}
        />
      </Flex>
    </Window>
  );
};

NewGameWindow.propTypes = {
  switchWindow: PropTypes.func,
  createGame: PropTypes.func,
  validateGame: PropTypes.func,
  name: PropTypes.string,
  isValid: PropTypes.bool
};

export default NewGameWindow;
