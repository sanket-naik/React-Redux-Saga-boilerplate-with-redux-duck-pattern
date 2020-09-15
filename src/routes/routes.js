import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {urls} from './router-urls'
import Home from "../components/main/Home";
import Nav from "../components/main/Nav";
import tables from "../components/Tables/tables";

const Routes =(props)=>{
  return(
    <Router>
        <Switch>
            <Route exact path={urls.HOME} component={tables} />
            {/* <Route exact path={urls.TEST} component={tables} /> */}
        </Switch>
    </Router>
  )
}

export default Routes;