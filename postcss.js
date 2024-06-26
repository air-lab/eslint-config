module.exports = {
    parser: require("postcss-scss"),
    plugins: [
        require('@csstools/postcss-sass')({
            "syntax": "postcss-scss"
        }),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: false,
                grid: false
            }
        }),
        require("postcss-flexbugs-fixes"),
        require("postcss-input-range"),
        require("postcss-scrollbar"),
    ]
}