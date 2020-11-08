module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['babel', 'react', '@typescript-eslint', 'typescript-sort-keys', 'prettier'],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/babel',
        'prettier/react',
    ],
    rules: {
        curly: [2, 'all'],
        'import/no-extraneous-dependencies': 0,
        'import/order': 0,
        'jsx-a11y/anchor-is-valid': [
            2,
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/media-has-caption': 0,
        'padding-line-between-statements': [
            2,
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
        'prettier/prettier': 2,
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-key': [
            2,
            {
                checkFragmentShorthand: true,
            },
        ],
        'react/jsx-no-literals': [
            2,
            {
                noStrings: false,
            },
        ],
        'react/jsx-no-useless-fragment': 2,
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: false,
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: false,
                shorthandFirst: false,
                shorthandLast: false,
            },
        ],
        'react/no-danger': 0,
        'react/prop-types': 0,
        'sort-imports': [
            2,
            {
                ignoreCase: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'sort-keys': [
            2,
            'asc',
            {
                caseSensitive: true,
                natural: false,
            },
        ],
        'spaced-comment': [2, 'always'],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    },
};
