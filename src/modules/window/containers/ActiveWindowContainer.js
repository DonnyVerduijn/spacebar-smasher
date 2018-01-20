import { connect } from 'react-redux';
import ActiveWindow from './../components/ActiveWindow';
import { getActiveWindow } from './../windowSelectors';

const mapStateToProps = (state) => {
    return { active: getActiveWindow(state) };
};

export default connect(mapStateToProps)(ActiveWindow);
