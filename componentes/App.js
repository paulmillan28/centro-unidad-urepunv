import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './componenteMain/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
