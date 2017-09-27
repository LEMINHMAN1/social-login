import React from 'react';
import PropTypes from 'prop-types';
import {checkLogin} from '../actions/access/LoginAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as pageConstants from './../constants/pageConstants';

class EnsureLoggedInContainer extends React.Component {

constructor(props) {
  super(props);
}

componentWillMount () {
  this.props.checkLogin(this.props.currentURL);
}

  render() {
    return this.props.children;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentURL: ownProps.location.pathname,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (url) => dispatch(checkLogin(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedInContainer)