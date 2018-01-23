import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';

const NewUserWindow = ({
  validateUser,
  createUser,
  backButtonClicked,
  name,
  isValid
}) => {
  return (
    <Window>
      <Label>username:</Label>
      <TextBox value={name} onChange={validateUser} />
      <Flex justifyContent="space-between">
        <Button
          label="back"
          className="Flat"
          onClick={() => {
            return backButtonClicked({
              target: 'MAIN'
            });
          }}
        />
        <Button
          disabled={!isValid}
          label="next"
          className="Raised"
          onClick={createUser}
        />
      </Flex>
    </Window>
  );
};

NewUserWindow.propTypes = {
  validateUser: PropTypes.string,
  createUser: PropTypes.string,
  backButtonClicked: PropTypes.func,
  name: PropTypes.string,
  isValid: PropTypes.bool
};

export default NewUserWindow;
