module.exports = {
    plugins: ['stylelint-prettier'],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
        'stylelint-config-concentric-order',
        'stylelint-config-prettier',
    ],
    rules: {
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-before': 'always',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'font-family-no-missing-generic-family-keyword': null,
        'font-weight-notation': 'numeric',
        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-name-case': [
            'lower',
            {
                ignoreFunctions: [],
            },
        ],
        'function-parentheses-space-inside': 'never',
        'length-zero-no-unit': true,
        'max-empty-lines': 1,
        'prettier/prettier': true,
        'rule-empty-line-before': [
            'always',
            {
                except: ['after-single-line-comment', 'first-nested'],
            },
        ],
        'selector-list-comma-newline-after': 'always',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'unit-case': 'lower',
    },
};
