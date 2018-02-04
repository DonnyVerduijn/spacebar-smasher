import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
// import ItemList from './../../../components/ItemList';
import Flex from './../../../components/Flex';
import Button from './../../../components/Button';
import Text from './../../../components/Text';

const LobbyWindow = ({ gameName, users, startGame, quitGame }) => {
    return <Window>
        <Text>{gameName}</Text>
        <ul>
            {users.map(user => {
               return <li key={user.id}>{user.name}</li>;
            })
            }
        </ul>
        <Flex justifyContent="space-between">
        <Button
          label="quit"
          className="Flat"
          onClick={quitGame}
        />
        <Button
        //   disabled={!isValid}
          label="Start"
          className="Raised"
          onClick={startGame}
        />
      </Flex>
    </Window>;
};

LobbyWindow.propTypes = {
    gameName: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.object),
    startGame: PropTypes.func,
    quitGame: PropTypes.func
};

export default LobbyWindow;
