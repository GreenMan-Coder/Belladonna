const RULES = {
    OFF: 'off',
    WARN: 'warn',
    ERROR: 'error'
}

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard'
        // 'next',
        // 'next/core-web-vitals'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/prop-types': 0,
        'react/jsx-key': RULES.OFF,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
            }
        ],
        'react/no-unknown-property': [
            2,
            {
                ignore: [
                    'jsx'
                ]
            }
        ]
        // "@next/next/no-img-element": "off"
    }
}
