import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {authLogin} from '../store/actions/auth'




class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  

  static propTypes = {
    authLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
   this.props.authLogin(this.state.username, this.state.password)
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/message" />;
    }
  return (
    <div>
    <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Username:  </label>
                  <input name="username" className="form-control"  value={this.state.username}
                        onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <label>Passoword: </label>
                  <input name="password" type="password" className="form-control" value={this.state.password}
                  
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary"/>
              </div>

              <p>
                
                Don't have an account? <Link to="/register">
                   Register</Link>
              </p>
          </form>
      </div>
    )
  };
  }



  const mapStateToProps = state => {
    return {
      loading: state.loading,
      error: state.error,
      isAuthenticated: state.isAuthenticated
    };
  };

export default connect(mapStateToProps, {authLogin})(LoginForm);













































