module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpg|jpeg|svg|ico)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ],
        },
    };
};
