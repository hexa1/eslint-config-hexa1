const rules = [
  './rules/import',
  './rules/react-a11y',
  './rules/react',
  './rules/style',
].map(require.resolve);

module.exports = {
  extends: ['airbnb'].concat(rules),
};
