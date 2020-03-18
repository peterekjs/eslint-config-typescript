const braceStyle = require('@peterek/eslint-config-base/lib/brace-style')

module.exports = {
    extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/brace-style': braceStyle,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                vars: 'local'
            }
        ],
        '@typescript-eslint/interface-name-prefix': [
            2,
            { prefixWithI: 'always', allowUnderscorePrefix: true }
        ],
        '@typescript-eslint/member-delimiter-style': [
            2,
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: false
                }
            }
        ],
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-var-requires': 0
    },
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.vue'
        ],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
            'babel': ['.js', '.jsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
}
