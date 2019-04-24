const path = require('path');
const webpack = require('webpack');
const HtmkWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        bundle:'./src/index.js',
    },
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html/,
                exclude:/node_modules/,
                use:{
                    loader:'html-loader'
                }
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}