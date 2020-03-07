import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import NewCage from "./containers/NewCage";

const BaseRouter = () => (
  <div>
    <Route exact path="/cages/" component={ArticleList} />
    <Route exact path="/cages/:cageID" component={ArticleDetail} />
    <Route exact path="/newcage" component={NewCage} />
  </div>
);

export default BaseRouter;
