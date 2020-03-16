import React from "react";
import { Route } from "react-router-dom";
import MessageList from "./containers/MessageListView";
import MessageDetail from "./containers/MessageDetailView"
import LoginForm from "./containers/Login"
import RegistrationForm from "./containers/Register"


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={MessageList} />{" "}
    <Route exact path="/message/:messageID" component={MessageDetail} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegistrationForm} />



  </div>
);

export default BaseRouter;