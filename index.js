module.exports = {
    extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['@typescript-eslint'],
    rules: {

    },
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
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
