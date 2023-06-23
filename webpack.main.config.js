const path = require('path')
const buildPath = path.resolve(__dirname, './dist')

const main = {
    entry: './src/main/main.ts',
    output: {
        filename: 'main.js',
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
    target: 'electron-main',
}

module.exports = main
