import React from 'react';
import Routes from './parts/Routes';
import Header from './parts/Header';
import Footer from './parts/Footer';

import LockScreen from '../Auth';
import NotificationManager from '../Notification';

class AppComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
        <LockScreen />
        <NotificationManager />
      </div>
    );
  }
}

AppComponent.propTypes = {

};
AppComponent.displayName = 'AppComponent';
AppComponent.defaultProps = {

};
export default AppComponent;
