import React from 'react';
import axios from 'axios'
import { Card } from 'antd'

import CustomForm from '../components/Form'




class MessageDetail extends React.Component {

    state = {
        message: {}
    }
    componentDidMount(){
        const messageID = this.props.match.params.messageID;
        axios.get(`http://127.0.0.1:8000/message/${messageID}/`)
            .then(res => {
                this.setState({
                    message: res.data
                });
            })
    }

    



    render() {
        return (
            <div>
           <Card title={this.state.message.title}>
               <p>
                   {this.state.message.description}
               
               </p>

               <p>
                   {this.state.message.posted}
               </p>

           </Card>
           <br/>
           <CustomForm requestType = "put"
           messageID={this.props.match.params.messageID}
           btnText="Edit"/>
           </div>
        )
    }
}




export default MessageDetail;