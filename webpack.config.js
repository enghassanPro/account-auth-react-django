const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        "main": ['./frontend/static/js/main.js'],
    },
    output: {
        filename: 'chunks/[name].[hash:8].bundle.js',
        chunkFilename: "chunks/[id].[hash:8].bundle.js",
        path: path.resolve(__dirname, 'frontend/static'),//path.join(process.cwd(), 'static/js'),
        publicPath: "/static/js/",
        // assetModuleFilename: 'images/[hash][ext]'
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].[hash:8].css',
        //     moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`,
        // })
        // new HtmlWebpackPlugin({
        //     "template": "./frontend/templates/index.html",
        //     inject: false,
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    // },
                    {
                        loader: require.resolve('style-loader'),
                        options: {
                            esModule: true,

                        }
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            esModule: true,
                            sourceMap: true,
                        }
                    },
                ]

            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '/static/images/'
                        }
                    }
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    name: '[name].[ext]',
                    publicPath: '/static/images/'
                }
            },

        ],

    }
}