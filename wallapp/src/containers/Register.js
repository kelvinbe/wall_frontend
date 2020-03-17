import React, {Component} from "react";
import { Link } from "react-router-dom";


export class RegistrationForm extends Component {
  state = {
    username:'',
    email:'',
    password: '',
    confrim_password:''
  }


  onSubmit = e => {
    e.preventDefault();
    console.log('submit')
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const { username, email, password, confrim_password} = this.state
    return (
      <div>
    <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>username:  </label>
                  <input name="username" className="form-control"  value={username}
                        onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <label>Email:  </label>
                  <input name="email" className="form-control"  value={email}
                        onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <label>Password: </label>
                  <input name="password" type="password" className="form-control" value={password}
                  
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <label>confrim_password: </label>
                  <input name="confirm_password" type="password" className="form-control" value={confrim_password}
                  
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value="Register" className="btn btn-primary"/>
              </div>

              <p>
                
                Already have an account?<Link to="/login">
                  Login</Link>
              </p>
          </form>
      </div>
    )
  }
}

export default RegistrationForm

