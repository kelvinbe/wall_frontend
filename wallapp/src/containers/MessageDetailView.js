import React from 'react';
import axios from 'axios'
import { Button, Card } from 'antd'

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

    handleDelete = (event) => {

        const messageID = this.props.match.params.messageID;
        axios.delete(`http://127.0.0.1:8000/message/${messageID}`);
        this.props.history.push('/')

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

<form onSubmit = {this.handleDelete}>
                    <Button type="danger" htmlType="submit">
                       Delete
                    </Button>
                </form>
           </div>
        )
    }
}




export default MessageDetail;