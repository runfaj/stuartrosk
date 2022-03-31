import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';

//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

import Home from "../views/Home/Home";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default Routes;
