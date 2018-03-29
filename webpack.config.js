const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: {
        "first": './src/first.js',
        "second": './src/second.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
