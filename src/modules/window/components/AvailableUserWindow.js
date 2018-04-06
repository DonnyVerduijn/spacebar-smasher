import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import TextBox from './../../../components/TextBox';
import Text from './../../../components/Text';
import ItemList from './../../../components/ItemList';
import Flex from './../../../components/Flex';
import Button from './../../../components/Button';
import Display from './../../../components/Display';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Search from 'material-ui-icons/Search';
import Close from 'material-ui-icons/Close';

class AvailableUserWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarVisible: false,
      searchString: '',
      users: this.props.users
    };
  }

  componentWillReceiveProps({ users }) {
    this.setState({ users });
  }

  componentDidMount() {
    this.props.availableUsers();
  }

  filterUsers(value) {
    const filteredUsers =
      value.length === 0
        ? this.props.users
        : this.props.users.filter(user => user.name.indexOf(value) === 0);

    this.setState({ users: filteredUsers });
  }

  toggleSearchBarVisibility() {
    this.setState({
      searchBarVisible: !this.state.searchBarVisible,
      searchString: ''
    });
    this.filterUsers('');
  }

  render() {
    const { localUserId, navigateUser, unconfirmUser, sendRequest } = this.props;
    const usersAvailable = this.props.users.length > 0;
    const usersFound = this.state.users.length > 0;
    return (
      <Window>
        <Display>
          {usersAvailable ? 'Pick your enemy.' : 'No players available.'}
        </Display>

        {usersAvailable && this.state.searchBarVisible
          ? <TextBox
            value={this.state.searchString}
            onChange={value => this.filterUsers(value)}
            autoFocus
          />
         : null}

        {usersAvailable && !usersFound ? <Text>No players found.</Text> : null}

        <ItemList
          className={'Scrollable GutterBottom'}
          items={this.state.users}
          value={'name'}
          onClick={id => {
            sendRequest({ destinationUserId: id });
            navigateUser({ location: 'REQUEST', id: localUserId });
          }}
        />
        <Flex justifyContent="space-between">
          <Button
            className="Raised"
            icon={<ArrowBack />}
            label={'Back'}
            onClick={() => {
              navigateUser({ id: localUserId, location: 'NEW_USER' });
              unconfirmUser();
            }}
          />
          <Button
            disabled={!usersAvailable}
            label="Search"
            icon={this.state.searchBarVisible ? <Close /> : <Search />}
            className="Raised"
            onClick={() => this.toggleSearchBarVisibility()}
          />
        </Flex>
      </Window>
    );
  }
}

AvailableUserWindow.propTypes = {
  localUserId: PropTypes.string,
  availableUsers: PropTypes.func,
  users: PropTypes.array,
  sendRequest: PropTypes.func,
  navigateUser: PropTypes.func,
  unconfirmUser: PropTypes.func
};

export default AvailableUserWindow;
