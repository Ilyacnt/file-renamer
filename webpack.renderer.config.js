const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildPath = path.resolve(__dirname, './dist')

const renderer = {
    entry: './src/renderer/renderer.ts',
    output: {
        filename: 'renderer.js',
        path: buildPath,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/renderer/index.html',
        }),
    ],
    target: 'electron-renderer',
}

module.exports = renderer
