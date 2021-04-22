const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['./src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.scss$/,
                use: [
                    {loader : 'style-loader'},
                    {loader : 'css-modules-typescript-loader?modules'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                auto: /\.module\.\w+$/i,
                            },
                        },
                    },
                    {loader : 'sass-loader'},
                ],
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        port: 8080,
        open : true,
        hot : true,
        historyApiFallback: true,
        contentBase: './dist',
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , 'src/index.html'),
            appMountId: 'app',
            filename: 'index.html'
        })
    ]
};

module.exports = config;