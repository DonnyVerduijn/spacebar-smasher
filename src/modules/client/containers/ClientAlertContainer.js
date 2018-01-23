import { connect } from 'react-redux';
import ClientAlert from './../components/ClientAlert';
import { getCurrentClientStatus } from './clientSelectors';

const mapStateToProps = (state) => ({
    message: getCurrentClientStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    onClick: dispatch({ type: 'HELLO_WORLD' })
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientAlert);
