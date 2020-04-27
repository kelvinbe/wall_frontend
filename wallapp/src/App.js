/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomLayout from './containers/Layout';
import * as actions from '../src/store/actions/auth'





class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  
  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
