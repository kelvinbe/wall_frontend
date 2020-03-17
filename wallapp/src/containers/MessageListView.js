import React from "react";
import axios from "axios";
import Message from "../components/message";
import CustomForm from "../components/Form";


class MessageList extends React.Component {
  state = {
    messages: []
  };

  fetchMessages = () => {
    axios.get("http://127.0.0.1:8000/message/").then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchMessages();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchMessages();      
    }
  }

  render() {
    return (
      <div>
        <Message data={this.state.messages} /> <br />
        <h2> Post a message </h2>
        <CustomForm requestType="post" messageID={null} btnText="Create" />
      </div>
    );
  }
}

export default MessageList;
