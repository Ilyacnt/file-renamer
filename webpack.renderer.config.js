const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildRendererPath = path.resolve(__dirname, './dist')

const renderer = {
    entry: './src/renderer/renderer.tsx',
    output: {
        filename: 'renderer.js',
        path: buildRendererPath,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: /node_modules/,
                        presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            //     use: ['file-loader'],
            // },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/renderer/index.html',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src', 'renderer'),
        },
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },
    target: 'electron-renderer',
}

module.exports = renderer
