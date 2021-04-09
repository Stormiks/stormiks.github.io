module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true
    }
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    curly: ['error', 'multi', 'consistent'],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // https://eslint.vuejs.org/rules/valid-v-slot.html
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    // https://eslint.vuejs.org/rules/html-indent.html
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: {
        startTag: 0,
        endTag: 0,
        selfClosingTag: 0
      },
      alignAttributesVertically: true,
      ignores: []
    }],
    // https://eslint.vuejs.org/rules/script-indent.html
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
    'vue/mustache-interpolation-spacing': [
      'error',
      'always'
    ],
    // https://eslint.vuejs.org/rules/no-multi-spaces.html
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    // https://eslint.vuejs.org/rules/component-tags-order.html
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    // https://eslint.vuejs.org/rules/this-in-template.html
    'vue/this-in-template': [
      'error',
      'never'
    ]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],

  extends: ['plugin:vue/essential']
}
