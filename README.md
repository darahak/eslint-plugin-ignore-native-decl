[![npm](https://img.shields.io/npm/v/eslint-plugin-ignore-native-decl.svg)](https://www.npmjs.com/package/eslint-plugin-ignore-native-decl)
[![Build status](https://ci.appveyor.com/api/projects/status/uy01qb7ah39klmuq/branch/master?svg=true)](https://ci.appveyor.com/project/darahak/eslint-plugin-ignore-native-decl/branch/master)
[![Build Status](https://travis-ci.org/darahak/eslint-plugin-ignore-native-decl.svg?branch=master)](https://travis-ci.org/darahak/eslint-plugin-ignore-native-decl)
[![codecov](https://codecov.io/gh/darahak/eslint-plugin-ignore-native-decl/branch/master/graph/badge.svg)](https://codecov.io/gh/darahak/eslint-plugin-ignore-native-decl)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/darahak/eslint-plugin-ignore-native-decl/master/LICENSE)

# eslint-plugin-ignore-native-decl

Preprocess JavaScript files to ignore forward declarations that use the `native function` notation for V8 extensions.  
You can find more details on V8 extensions in this [wiki article](https://github.com/adobe/brackets-shell/wiki/Writing-V8-Extensions).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm install eslint --save-dev
```

Next, install `eslint-plugin-ignore-native-decl`:

```bash
npm install eslint-plugin-ignore-native-decl --save-dev
```

You can also use [Yarn](https://yarnpkg.com/en/):

```bash
yarn add eslint --dev
yarn add eslint-plugin-ignore-native-decl --dev
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
