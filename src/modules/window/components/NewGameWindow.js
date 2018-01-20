import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';
import { validateGame } from './../../game/gameRequests';

const NewGameWindow = ({ onClick, gameNameAvailable }) => {
  console.log(gameNameAvailable);
  return (
    <Window>
      <Label>gamename:</Label>
      <TextBox onChange={(value) => {
        validateGame({
          name: value
        });
      }}/>
      <Flex justifyContent="space-between">
        <Button
          label="back"
          className="Flat"
          onClick={() => {
            return onClick('NEW_GAME', 'BACK_BTN');
          }}
        />
        <Button
          disabled={!gameNameAvailable}
          label="next"
          className="Raised"
          onClick={() => {
            return onClick('NEW_GAME', 'NEXT_BTN');
          }}
        />
      </Flex>
    </Window>
  );
};

NewGameWindow.propTypes = {
  onClick: PropTypes.func,
  gameNameAvailable: PropTypes.bool
};

export default NewGameWindow;
