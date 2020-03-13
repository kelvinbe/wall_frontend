import React from 'react';
import Messages from '../components/message'
import axios from 'axios'



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
                console.log(res.data);
            })

    }



    render() {
        return (
            <Messages data={this.state.messages}/>
        )
    }
}




export default MessageList;