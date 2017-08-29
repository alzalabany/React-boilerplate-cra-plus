import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';


function Notification() {
  return (
    <div>
    </div>
  );
}

Notification.propTypes = {
  dispatch: func.isRequired, // eslint-disable-line
};
Notification.displayName = 'Notification';
Notification.defaultProps = {

};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default withConnect(Notification);
