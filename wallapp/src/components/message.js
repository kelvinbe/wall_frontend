import React from 'react';
import { List, Avatar, Icon } from 'antd';
import Messagee from './message.css'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Message = (props) => {
    return (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: (page) => {
            console.log(page);
        },
        pageSize: 3,
        }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc-PZDWDcDO/w:382/h:266/q:90/http://www.bleedingcool.com/wp-content/uploads//2012/05/t-rex-mamooth.jpg" />}
        >
            <List.Item.Meta
            title={<a href={`/${item.id}`}>{item.title}</a>}
            description={item.description}
            />
            {item.author}
        </List.Item>
        )}
    />
    )
}

export default Message;