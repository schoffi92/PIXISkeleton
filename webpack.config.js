const devMode = process.env.NODE_ENV !== 'production';
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: devMode ? "development" : "production",
    entry: {
        pixi: "./node_modules/pixi.js/dist/pixi.js",
        main: "./src/script/main",
        style: "./src/script/style",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                use: [
                    "html-loader",
                    "pug-html-loader"
                ],
            },
            {
                test: /\.s?[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ttf|eot)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10240'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: "",
    },
    devServer: {
        open: true,
        inline: true,
        contentBase: './dist',
        port: 8000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: "css/[id].css",
            filename: "css/[name].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/views/index.pug'),
            inject: 'body'
        }),
    ]
}