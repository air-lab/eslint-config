module.exports = {
    extends: [
      "stylelint-config-standard-scss",
      "stylelint-config-standard-vue/scss"
    ],
    rules: {
      "selector-class-pattern": null,
      "indentation": [
        2,
        {
          "baseIndentLevel": 1
        }
      ]
    }
  }