module.exports = {
  rules: {
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [0],

    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [0],

    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': [0],

    // http://eslint.org/docs/rules/indent
    indent: [2, 2, {
      SwitchCase: 1,
    }],

    // http://eslint.org/docs/rules/max-len
    'max-len': [0],

    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': [2],

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': [0],

    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': [0],

    // http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [0],

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none',
    }],

    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [2, 'nofunc'],

    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': [0],

    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [0],

    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': [0],

    // http://eslint.org/docs/rules/quotes
    quotes: [2, 'single', { allowTemplateLiterals: true }],
  },
};
