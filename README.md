# eslint-config-hexa1

This is a base ESLint config that all Hexa1 Javascript projects should use.

It is heavily based on [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) config, with a number of customizations.

## Usage

Install eslint and this config:

`npm install eslint hexa1/eslint-config-hexa1`

Add it to your .eslintrc:

```json
{
  "extends": "hexa1"
}
```

## Syntax support

This config does not include `babel-eslint`. ESLint itself supports all ES6 features, as well as React/JSX syntax. However, if you're using ES7+ features (rest spread, decorators, etc) you should include `babel-eslint` in your project's eslint config and configure babel accordingly:

```json
{
  "parser": "babel-eslint",
  "extends": "hexa1"
}
```
