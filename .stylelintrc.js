export default {
  extends: ['stylelint-config-standard', 'stylelint-styled-components-order'],
  rules: {
    'color-no-hex': true,
    'color-named': 'never',
    'declaration-property-value-disallowed-list': {
      '/.+/': '/(rgba?|hsla?)(.*)/',
    },
    'declaration-block-no-redundant-longhand-properties': false,
  },
};
