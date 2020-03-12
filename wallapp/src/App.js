import * as React from 'react';
import { Component } from 'react';
// import { BrowserRouter as Router}  from 'react-router-dom';
import 'antd/dist/antd.css'; 
import CustomLayout from './containers/Layout';
import { BaseRouter } from '../src/routes';


class App extends Component {
  render(){

    return (
      <div className="App">
      
      <CustomLayout>

        <BaseRouter />

      </CustomLayout>
      
      </div>
    );

  }
 
}

export default App
