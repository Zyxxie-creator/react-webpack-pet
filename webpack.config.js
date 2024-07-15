const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', 'webpack-plugin-serve/client'],
    output: {
        filename: 'bundle.[fullhash].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [require('react-refresh/babel')].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                compileType: 'module',
                                mode: 'local',
                                exportLocalsConvention: 'camelCaseOnly',
                                namedExport: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new WebpackPluginServe({
            host: 'localhost',
            port: port,
            historyFallback: true,
            open: true,
            liveReload: false,
            hmr: true,
            static: './dist',
        }),
        new ReactRefreshWebpackPlugin({
            overlay: { sockIntegration: 'wps' },
        }),

    ],
    watch: true,
};