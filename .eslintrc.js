module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb-base',
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'no-useless-backreference': 'off',
        'no-restricted-exports': 'off',
        'function-call-argument-newline': 'off',
        'prefer-exponentiation-operator': 'off',
        'no-unsafe-optional-chaining': 'off',
        'no-unreachable-loop': 'off',
        'no-setter-return': 'off',
        'no-promise-executor-return': 'off',
        'no-loss-of-precision': 'off',
        'no-import-assign': 'off',
        'no-dupe-else-if': 'off',
        'prefer-regex-literals': 'off',
        'no-nonoctal-decimal-escape': 'off',
        'no-constructor-return': 'off',
        'grouped-accessor-pairs': 'off',
        'default-param-last': 'off',
        'default-case-last': 'off',
        'global-require': 'off'
    }
}