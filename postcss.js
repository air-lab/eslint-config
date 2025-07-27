/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
    synatax: require('postcss-scss'),
    plugins: [
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: false,
                grid: false
            }
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-input-range'),
        require('postcss-scrollbar'),
        require('postcss-place'),
        require('@csstools/postcss-logical-viewport-units'),
        require('postcss-gap-properties'),
    ]
}