import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import App from "./wrappers/App";

ReactDOM.render(
    <BrowserRouter /*basename="/stuartrosk" //uncomment if the root of is is a subdomain */>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
