import React from "react";
import { Route } from "react-router-dom";
import MessageList from "./containers/MessageListView";
import MessageDetail from "./containers/MessageDetailView"


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={MessageList} />{" "}
    <Route exact path="/:messageID" component={MessageDetail} />

  </div>
);

export default BaseRouter;