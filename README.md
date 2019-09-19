[![Build Status](https://travis-ci.org/kaelzhang/nodegit-is.svg?branch=master)](https://travis-ci.org/kaelzhang/nodegit-is)
[![Coverage](https://codecov.io/gh/kaelzhang/nodegit-is/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/nodegit-is)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/nodegit-is?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/nodegit-is)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/@nodegit/is.svg)](http://badge.fury.io/js/@nodegit/is)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/@nodegit/is.svg)](https://www.npmjs.org/package/@nodegit/is)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/nodegit-is.svg)](https://david-dm.org/kaelzhang/nodegit-is)
-->

# @nodegit/is

The definitive checking library for git

## Install

```sh
$ npm i @nodegit/is
```

## Usage

```js
const is = require('@nodegit/is')

// Test if the current working directory is a git repo
// or inside a git repo
is.git()

// Which is equivalent to
is.git(process.cwd())

// Test if the current working directory is the root of a git repo
is.gitRoot()
```

### git(dir = process.cwd()): boolean

- **dir** `string=process.cwd()` the directory to be tested. If not specified, the current working directory will be used

Returns `boolean` true if `cwd` is the root of a git repo or inside a git repo

### gitRoot(dir = process.cwd()): boolean

- **dir**

Returns `boolean` true if `cwd` is the root of a git repo

## License

[MIT](LICENSE)
