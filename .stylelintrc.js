export default {
  extends: ['stylelint-config-standard', 'stylelint-styled-components-order'],
  rules: {
    'color-no-hex': true,
    'color-named': 'never',
    'declaration-property-value-disallowed-list': {
      '/.+/': '/(rgba?|hsla?)(.*)/',
    },
    'declaration-block-no-redundant-longhand-properties': null,
    'custom-property-pattern': null,
    'media-query-no-invalid': null,
  },
};
