import React from 'react';
import { connect } from "react-redux";


import axios from 'axios';

class CustomForm extends React.Component {

    handleFormSubmit = async (event, requestType, messageID) => {
        event.preventDefault();
    
        const postObj = {
          title: event.target.elements.title.value,
          description: event.target.elements.description.value
    
        }
    
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`,
        };
        
        if (requestType === "post") {
          await axios.post("http://127.0.0.1:8000/message/", postObj)
            .then(res => {
              if (res.status === 201) {
                  console.log(res.data)
              }
            })
        } else if (requestType === "put") {
          await axios.put(`http://127.0.0.1:8000/message/${messageID}`, postObj)
            .then(res => {
              if (res.status === 200) {
                console.log(res.data)
              }
            })
        }
      };

    render() {
        return (
         <div style={{marginTop: 10}}>

                <form onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.messageID
            )
          }>
                    <div className="form-group">
                        <label>Title:  </label>
                        <input name="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input name="description" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
  };
  
  export default connect(mapStateToProps)(CustomForm);