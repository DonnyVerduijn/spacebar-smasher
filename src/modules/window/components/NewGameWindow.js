import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';
import { validateGame, createGame } from './../../game/gameRequests';

const NewGameWindow = ({ onClick, name, nameAvailable }) => {
  console.log(name);
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
            return onClick({
              windowId: 'NEW_GAME',
              itemId: 'BACK_BTN',
              name
            });
          }}
        />
        <Button
          disabled={!nameAvailable}
          label="next"
          className="Raised"
          onClick={createGame}
        />
      </Flex>
    </Window>
  );
};

NewGameWindow.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  nameAvailable: PropTypes.bool
};

export default NewGameWindow;
