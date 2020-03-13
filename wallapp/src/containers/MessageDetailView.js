import React from 'react';
import axios from 'axios'
import { Card } from 'antd'



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
                console.log(res.data);


            })

    }



    render() {
        return (
           <Card title={this.state.message.title}>
               <p>
                   {this.state.message.description}
               
               </p>

               <p>
                   {this.state.message.posted}
               </p>

           </Card>
        )
    }
}




export default MessageDetail;