import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

import makeSelectAuth from './selectors';
import TEXT from './messages';

class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.dispatch({type:'AUTH_MOUNTED'});
  }
  render() {
    return (
      <div>
        {TEXT.id}
      </div>
    );
  }
}

Auth.propTypes = {
  dispatch: func.isRequired,
};
Auth.displayName = 'Auth';
Auth.defaultProps = {

};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Auth);
