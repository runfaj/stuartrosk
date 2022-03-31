'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require("path");

// Constants
const PORT = 8080;
///////const HOST = '0.0.0.0';
const HOST = '127.0.0.1';

// App
const app = express();
app.use(cookieParser());

// webpack hmr for dev or bundled otherwise
const isDevelopment = process.argv.indexOf('--development') !== -1;
if(isDevelopment) {
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");

    const webpackConfig = require(path.resolve(__dirname, "../config/webpack.config"));
    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            //hot: true,
            stats: { colors: true },
            //noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, "../public")));

// main route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public", "index.html"))
});

// start server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
