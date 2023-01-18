//includes
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//misc
const isDevelopment = process.argv.indexOf('--development') !== -1;

//define plugins
let plugins = [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        'moment': 'moment',
    }),
    new webpack.LoaderOptionsPlugin({
        test: /\.(less|css)$/i,
        options: {
            postcss: {
                plugins: [autoprefixer]
            }
        }
    }),
    new webpack.ProgressPlugin((percentage, message) => {
        console.log(`${(percentage * 100).toFixed()}% ${message}`);
    })
];
if(isDevelopment) {

    plugins.push(new webpack.LoaderOptionsPlugin({
        debug: true
    }));
    plugins.push(new webpack.HotModuleReplacementPlugin());

} else {

    plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }));
    plugins.push(new UglifyJsPlugin({
        sourceMap: true
    }));
    plugins.push(new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }));
}

//define exports
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: {
        app: isDevelopment
            ?   [
                    'react-hot-loader/patch',
                    "webpack-hot-middleware/client?path=/__webpack_hmr",
                    'babel-polyfill',
                    path.join(__dirname, '../src', 'index.js')
                ]
            :   path.join(__dirname, '../src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        modules: [
          path.resolve('../public'),
          'node_modules',
        ],
        extensions: ['*', '.js', '.jsx']
    },
    module: {
		rules: [
            {
	            test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
                options: {
                    //cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
			},
            {
				test: /\.less$/,
				loaders:!isDevelopment
                        ? [MiniCssExtractPlugin.loader, "css-loader", "less-loader?strictMath=on"]
                        : ["style-loader", "css-loader", "less-loader?strictMath=on"]
			},
            { //jquery visible in console
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            },
            { // files included in vendor css
                test: /\.(gif|png|jpe?g|svg|ttf|woff|woff2|eot|ico)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'url-loader?limit=100000'
            }
		]
	},
    plugins: plugins,
};

if(!isDevelopment) {
    module.exports.optimization = {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    };
}
