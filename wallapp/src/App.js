import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import CustomLayout from './containers/Layout';
import MessageList from './containers/MessageListView';

class App extends Component {
  render(){

    return (
      <div className="App">
      <CustomLayout>

        <MessageList />

      </CustomLayout>
      </div>
    );

  }
 
}

export default App;
