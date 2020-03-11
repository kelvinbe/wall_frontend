import { React } from 'react';
import { Route } from 'react-router-dom'
import MessageList from './containers/MessageListView';


const BaseRouter = () => (
    <div>
        <Route  exact path='/' component={MessageList}/>
        <Route  exact path='/:messageID' component={MessageList}/>

    </div>

);

export default BaseRouter;


