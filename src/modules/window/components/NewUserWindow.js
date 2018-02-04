import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Label from './../../../components/Label';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';

const NewUserWindow = ({
  validateUser,
  confirmUser,
  previousWindow,
  name,
  isValid
}) => {
  return (
    <Window>
      <TextBox
        label="username:"
        isValid={isValid}
        autoFocus={true}
        value={name}
        onChange={validateUser}
      />
      <Flex justifyContent="space-between">
        <Button label="back" className="Flat" onClick={previousWindow} />
        <Button
          disabled={!isValid}
          label="next"
          className="Raised"
          onClick={() => confirmUser(name)}
        />
      </Flex>
    </Window>
  );
};

NewUserWindow.propTypes = {
  validateUser: PropTypes.func,
  confirmUser: PropTypes.func,
  previousWindow: PropTypes.func,
  name: PropTypes.string,
  isValid: PropTypes.bool
};

export default NewUserWindow;
