module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpg|jpeg|svg|ttf|eot)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff",
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ],
        },
    };
};
