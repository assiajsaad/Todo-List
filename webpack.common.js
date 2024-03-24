const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        data: './src/data.js',
        project:'./src/models/project.js',
        projectUI:'./src/components/project-ui.js',
        content: './src/components/content.js',
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',

        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
              },
        ],
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },
    optimization: {
        runtimeChunk: 'single'
    }
}