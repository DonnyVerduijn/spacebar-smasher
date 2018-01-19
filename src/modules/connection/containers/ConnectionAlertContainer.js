import { connect } from 'react-redux';
import ConnectionAlert from './../components/ConnectionAlert';
import { getCurrentConnectionStatus } from './connectionSelectors';

const mapStateToProps = (state) => {
    return { message: getCurrentConnectionStatus(state) };
};

const mapDispatchToProps = (dispatch) => {
    return { onClick: dispatch({ type: 'HELLO_WORLD' }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionAlert);
