import React from "react";
import { BrowserRouter as Router, Switch,Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import MessageList from "../containers/MessageListView";
import MessageDetail from "./MessageDetailView";
import Login from "./Login";
import RegistrationForm from "./Register";




class CustomLayout extends React.Component {
  render() {
    return (
      <Router>

      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link to={'/message'} className="navbar-brand">The Wall</Link>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to={'/message'} className="nav-link"></Link>
              </li>
              <li className="nav-item">
                <Link to={'/message'} className="nav-link">Messages</Link>
              </li>
              
              {
                this.props.isAuthenticated ?

                <li className="nav-item">
                <Link onClick={this.props.logout} to={'/'} className="nav-link">logout</Link>
              </li>

              :

              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
              </li>

              }
            </ul>
          </div>
        </nav> <br/>
        <h2>The Wall</h2> <br/>
        <Switch>
        <Route exact path='/message' component={ MessageList } />
              <Route path='/message/:id' component={ MessageDetail } />
              <Route path='/login' component={ Login } />
              <Route path='/register' component={ RegistrationForm } />
              
        </Switch>
      </div>

    </Router>
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
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomLayout));
