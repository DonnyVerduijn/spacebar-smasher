import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Window from './../components/Window';

class NewUserWindow extends Component {
  constructor(props) {
    super(props);
    this.formData = {};
    this.state = {
      userName: '',
      gameName: ''
    };
  }

  sendFormData() {
    this.createUser(this.state.userName);
    this.createPlayer(this.state.gameName);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Window>
        <form>
          <label>username:</label>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </form>
      </Window>
    );
  }
}

NewUserWindow.propTypes = {};
