const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './app.js',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: './index.html', to: DIST_DIR}
            ]
        })
    ],
    mode:'development',
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
        ]
    },
    devServer: {
        contentBase: DIST_DIR
    },
}