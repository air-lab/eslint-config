# Config Usage

## Microsoft VS Code

Install package:

```sh
pnpm add -D https://github.com/airlab/eslint-config.git
```

```sh
npm i -D https://github.com/airlab/eslint-config.git
```

Create `.eslintrc` file:

```js
import config from 'eslint-config-airlab'

export default config
```

Create workflow file and add next settings to enable formatter:

```json
{
 "folders": [
  {
   "path": "."
  }
 ],
 "extensions": {
  "recommendations": [
   "Vue.vscode-typescript-vue-plugin",
   "stylelint.vscode-stylelint",
   "dbaeumer.vscode-eslint"
  ]
 },
 "settings": {
  "eslint.enable": true,
  "eslint.format.enable": true,
  "[typescript]": {
   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "emmet.includeLanguages": {
   "typescript": "html"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
 }
}
```

### Generate d.ts files

```sh
npx -p typescript tsc index.js --declaration --allowJs --emitDeclarationOnly --outDir ./ --target esnext
```
