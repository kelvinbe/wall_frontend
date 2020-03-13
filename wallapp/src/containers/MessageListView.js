import React from 'react';
import Messages from '../components/message'
import axios from 'axios'
import CustomForm from '../components/Form'



class MessageList extends React.Component {

    state = {
        messages: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/message/')
            .then(res => {
                this.setState({
                    messages: res.data
                });
               
            })

    }



    render() {
        return (
            <div>
            <Messages data={this.state.messages}/>
            <br/>
            <h2>
                Post a Message
            </h2>
            <CustomForm requestType="post" 
                        messageID={null}
                        btnText="Post"/>
            </div>
        )
    }
}




export default MessageList;