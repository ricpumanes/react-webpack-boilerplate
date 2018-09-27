import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/Login';
import * as actions from '../actions/';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);