const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './test/main.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'less'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Demo',
          template: "./public/index.html"
        }),
    ],
    devServer: {
        port: 8880,
        open: true
    },
    mode: "development"
}