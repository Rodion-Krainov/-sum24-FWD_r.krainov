const path = require('path');

module.exports = {
    entry: './src/script.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, '/'),
                watch: true,
            },
            {
                directory: path.join(__dirname, 'images'),
                publicPath: '/images',
            },
            {
                directory: path.join(__dirname, 'styles'),
                publicPath: '/styles',
            },
        ],
        compress: true,
        port: 9000,
        open: true
    },
    mode: 'production'
};
