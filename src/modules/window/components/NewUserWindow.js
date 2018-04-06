import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';

class NewUserWindow extends Component {
  render() {
    const { validateUser, confirmUser, navigateUser, user } = this.props;
    return (
      <Window>
        <form>
          <TextBox
            label="username:"
            isValid={user.isValid}
            autoFocus={true}
            value={user.name}
            onChange={value => validateUser({ name: value })}
          />
          <Flex justifyContent="space-between">
            <Button
              className="Raised"
              label="Back"
              icon={<ArrowBack />}
              onClick={() => navigateUser({ id: user.id, location: 'MAIN' })}
            />
            <Button
              disabled={!user.isValid}
              type="submit"
              label="Next"
              icon={<ArrowForward />}
              iconAfterLabel
              onClick={() => {
                navigateUser({ location: 'AVAILABLE_USERS', id: user.id });
                confirmUser({ name: user.name });
              }}
              className="Raised"
            />
          </Flex>
        </form>
      </Window>
    );
  }
}

NewUserWindow.propTypes = {
  instantiateUser: PropTypes.func,
  validateUser: PropTypes.func,
  confirmUser: PropTypes.func,
  navigateUser: PropTypes.func,
  user: PropTypes.object
};

export default NewUserWindow;
