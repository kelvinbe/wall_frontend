import React from 'react';

import axios from 'axios';

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, messageID) => {
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;

        console.log(title, description )


    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };

            // eslint-disable-next-line default-case
            switch ( requestType ) {

                case 'post':
                    return axios.post('http://127.0.0.1:8000/message', {
                        title: title,
                        description: description,

                       

                    }
                    )
                    .then(res => console.log(res))
                    .catch(error => console.error(error))

                case 'put':
                    return axios.post(`http://127.0.0.1:8000/message/${messageID}`, {
                        title: title,
                        description: description
                    })
                    .then(res => console.log(res))
                    .catch(error => console.error(error))


            }
        }

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

export default CustomForm;