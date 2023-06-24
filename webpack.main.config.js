const path = require('path')
const buildPath = path.resolve(__dirname, './dist')

const main = {
    entry: {
        main: './src/main/main.ts',
        preload: './src/main/preload.ts',
    },
    output: {
        filename: '[name].js',
        path: buildPath,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },
    target: 'electron-main',
}

module.exports = main
