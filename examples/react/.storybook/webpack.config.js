const path = require('path');
const srcPath = path.resolve(__dirname, "../../../src");

module.exports = {
    resolve: {
        extensions:  ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: srcPath,
                loader: 'tslint-loader',
                enforce: 'pre',
                options: {
                    failOnHint: true,
                    fix: true
                }
            },
            {
                test: /\.tsx?$/,
                include: srcPath,
                use: 'awesome-typescript-loader'
            }
        ]
    }
};

