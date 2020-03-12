import React  from 'react';
import  {Route}  from 'react-router-dom/Route'
import MessageList from '../src/containers/MessageListView';


export const BaseRouter = () => { 
    return( 

    <div>
        <Route  exact path='/' component={MessageList}/>

    </div>

);
}
export default BaseRouter;



