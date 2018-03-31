import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import TextBox from './../../../components/TextBox';
import Button from './../../../components/Button';
import Flex from './../../../components/Flex';

class NewUserWindow extends Component {
  componentDidMount() {
      this.props.instantiateUser();
  }

  render() {
    const { nextWindow, validateUser, confirmUser, previousWindow, user } = this.props;
    return (
      <Window>
        <form>
        <TextBox
          label="username:"
          isValid={user.isValid}
          autoFocus={true}
          value={user.name}
          onChange={value => validateUser(user.id, value)}
        />
        <Flex justifyContent="space-between">
          <Button label="back" className="Flat" onClick={previousWindow} />
          <Button
            disabled={!user.isValid}
            label="next"
            type="submit"
            className="Raised"
            onClick={() => confirmUser(user.name, nextWindow)}
          />
        </Flex>
        </form>
      </Window>
    );
  }
}

NewUserWindow.propTypes = {
  nextWindow: PropTypes.string,
  instantiateUser: PropTypes.func,
  validateUser: PropTypes.func,
  confirmUser: PropTypes.func,
  previousWindow: PropTypes.func,
  user: PropTypes.object
};

export default NewUserWindow;
