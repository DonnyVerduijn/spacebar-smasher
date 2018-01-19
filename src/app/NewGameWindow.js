
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actionCreators';

class NewGameWindow extends Component {
    constructor(props) {
      super(props);
      this.formData = {};
      this.state = {
        userName: '',
        gameName: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.sendFormData = this.sendFormData.bind(this);
    }

    createUser(name) {
      actions.createUser(name);
    }

    createPlayer(name) {
      actions.createPlayer(name);
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
        <div className="Window">
          <h1 className="Title">Sp_cebar smɅsher</h1>
          <form>
            <label>username:</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <label>gamename:</label>
            <input
              type="text"
              name="gameName"
              value={this.state.gameName}
              onChange={this.handleChange}
            />
          </form>
          <button
            className="LinkButton left"
            onClick={() => {
              this.props.onClickBackBtn('main');
            }}
          >
            back
          </button>
          <button className="right" onClick={this.sendFormData}>
            Next
          </button>
        </div>
      );
    }
  }

  NewGameWindow.propTypes = { onClickBackBtn: PropTypes.func };

