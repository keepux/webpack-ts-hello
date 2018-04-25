const path = require('path');

module.exports = {
    entry: './app.js', //bundle entry point
    output: {
        path: path.resolve(__dirname, 'dist'), //output directory
        filename: '[name].js', // name of generated bundle
    },
};