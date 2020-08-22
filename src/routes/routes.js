import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {urls} from './router-urls'
import Home from "../components/main/Home";

const Routes =(props)=>{
  return(
    <Router>
        <Switch>
            <Route exact path={urls.HOME} component={Home} />
        </Switch>
    </Router>
  )
}

export default Routes;