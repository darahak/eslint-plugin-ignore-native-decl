# eslint-plugin-ignore-native-decl [![Build Status](https://travis-ci.org/darahak/eslint-plugin-ignore-native-decl.svg?branch=master)](https://travis-ci.org/darahak/eslint-plugin-ignore-native-decl)

Preprocess JavaScript files to ignore forward declarations that use the `native function` notation for v8 extensions.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ignore-native-decl`:

```
$ npm install eslint-plugin-ignore-native-decl --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ignore-native-decl` globally.

## Usage

Add `ignore-native-decl` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ignore-native-decl"
    ]
}
```
