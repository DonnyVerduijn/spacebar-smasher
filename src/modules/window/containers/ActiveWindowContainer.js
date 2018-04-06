import { connect } from 'react-redux';
import ActiveWindow from './../components/ActiveWindow';
import { getLocalUserId } from './../windowSelectors';
import * as fromUser from './../../user/userSelectors';

const mapStateToProps = (state) => {
    const localUserId = getLocalUserId(state);
    const user = fromUser.getById(state, localUserId);
    return {
        active: user ? user.currentWindow : null
    };
};

export default connect(mapStateToProps)(ActiveWindow);
