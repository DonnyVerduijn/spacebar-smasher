import { connect } from 'react-redux';
import SocketAlert from './../components/SocketAlert';
import { getCurrentSocketStatus } from './socketSelectors';

const mapStateToProps = (state) => ({
    message: getCurrentSocketStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    onClick: dispatch({ type: 'HELLO_WORLD' })
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketAlert);
