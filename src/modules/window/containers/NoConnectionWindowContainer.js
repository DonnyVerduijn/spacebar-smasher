import { connect } from 'react-redux';
import NoConnectionWindow from './../components/NoConnectionWindow';
// import * as actions from './../windowActions';
import { getReconnectTimeout } from './../../socket/socketSelectors';

const mapStateToProps = (state) => {
    return {
        reconnectTimeout: getReconnectTimeout(state)
    };
};

export default connect(mapStateToProps)(NoConnectionWindow);
