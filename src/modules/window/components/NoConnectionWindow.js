import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Button from './../../../components/Button';
import Paragraph from './../../../components/Paragraph';

const NoConnectionWindow = () => {
    return <Window>
        <Paragraph>Connection has been lost.</Paragraph>
        <Button className="Raised">Reconnect</Button>
    </Window>;
};

NoConnectionWindow.propTypes = {
    reconnectTimeout: PropTypes.string
};

export default NoConnectionWindow;
