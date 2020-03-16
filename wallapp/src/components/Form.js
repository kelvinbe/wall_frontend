import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';
const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, messageID) => {
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;

            // eslint-disable-next-line default-case
            switch ( requestType ) {

                case 'post':
                    return axios.post('http://127.0.0.1:8000/message/', {
                        title: title,
                        description: description
                    })
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
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event, this.props.requestType,
                this.props.messageID)}>
            <FormItem label="Title" >
                <Input name="title" placeholder="Put a title here" />
            </FormItem>
            <FormItem label="Description" >
                <Input name="description" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}

export default CustomForm;