import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'


export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2, {
        'SwitchCase': 1,
        'ignoredNodes': [
          'TemplateLiteral *'
        ]
      }],
      '@stylistic/ts/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/type-annotation-spacing': [
        'error',
        {
          'before': false,
          'after': true,
          'overrides': {
            'arrow': {
              'before': true,
              'after': true
            }
          }
        }
      ]
    }
  }
)