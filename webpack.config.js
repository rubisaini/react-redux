/**
 * Created by intelligrape on 9/5/17.
 */
const path = require('path');

const config = {
    entry : './src/main.js' ,

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }, output: {
        filename: './src/index.js'
    },
    devServer:{
            contentBase: './',
            port: 9000,
            historyApiFallback: true
    }

};

module.exports = config;