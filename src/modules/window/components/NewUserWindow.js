import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';
import { validateUser } from './../../user/userRequests';

const NewUserWindow = ({ onClick, name, nameAvailable }) => {
  return (
    <Window>
      <Label>username:</Label>
      <TextBox value={name} onChange={(value) => {
        validateUser({
          name: value
        });
      }}/>
      <Flex justifyContent="space-between">
        <Button
          label="back"
          className="Flat"
          onClick={() => {
            return onClick('NEW_USER', 'BACK_BTN');
          }}
        />
        <Button
          disabled={!nameAvailable}
          label="next"
          className="Raised"
          onClick={() => {
            return onClick('NEW_USER', 'NEXT_BTN');
          }}
        />
      </Flex>
    </Window>
  );
};

NewUserWindow.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  nameAvailable: PropTypes.bool
};

export default NewUserWindow;
