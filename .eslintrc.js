module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true
    },
    settings: {
        jsx: true
    },
    plugins: [
        'babel', 'react'
    ],
    extends: 'airbnb',
    rules: {
        'babel/semi': 1,
        'brace-style': [2, '1tbs'],
        curly: [2, 'all'],
        'import/no-extraneous-dependencies': 0,
        'import/order': 0,
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        'jsx-a11y/anchor-is-valid': [2, {
            components: ['Link'],
            specialLink: ['to']
        }],
        'jsx-a11y/media-has-caption': 0,
        'max-len': [2, {
            code: 120,
            ignoreTemplateLiterals: false,
            tabWidth: 4,
        }],
        'no-multiple-empty-lines': [2, {
            max: 1,
            maxBOF: 0,
            maxEOF: 1,
        }],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: false,
        }],
        'padding-line-between-statements': [2,
            {
                blankLine: 'always',
                prev: [
                    'case',
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                    'return',
                ],
            },
        ],
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-indent': [2, 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/jsx-max-props-per-line': [2, {
            maximum: 3,
        }],
        'react/jsx-no-literals': [2, {
            noStrings: false,
        }],
        'react/jsx-one-expression-per-line': [2, {
            allow: 'literal',
        }],
        'react/jsx-sort-default-props': [2, {
            ignoreCase: false,
        }],
        'react/jsx-sort-props': [2, {
            callbacksLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
        }],
        'react/no-danger': 0,
        'react/sort-prop-types': [2, {
            callbacksLast: false,
            ignoreCase: false,
            requiredFirst: false,
            sortShapeProp: false,
        }],
        'sort-imports': [2, {
            ignoreCase: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'sort-keys': [2, 'asc', {
            caseSensitive: true,
            natural: false,
        }],
    },
};