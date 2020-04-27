import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { authRegister } from "../store/actions/auth";
import { connect } from "react-redux";

export class RegistrationForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  static propTypes = {
    authRegister: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };


    handleSubmit = (e) => {
      e.preventDefault();
         // eslint-disable-next-line no-lone-blocks
         {
          this.props.authRegister(
              this.state.username,
              this.state.email,
              this.state.password,          );
          this.props.history.push('/messages/');
          console.log(alert("user registered"))
        }
      
    }


  

  onChange = e => this.setState({ [e.target.name]: e.target.value });

 

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  data-toggle="validator">
          <div className="form-group">
            <label>User Name: </label>
            <input
              name="username"
              className="form-control"
              required
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>


          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>

          <p>
            Already have an account?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { authRegister })(RegistrationForm);














