const test = require('ava')
// const {join} = require('path')
// const log = require('util').debuglog('@nodegit/is')

const {copy, resolve} = require('test-fixture')('foo')
const execa = require('execa')

const is = require('..')

test.before(async () => {
  await copy()
  await execa('git', ['init'], {
    cwd: resolve('bar')
  })
})

test('is.git', t => {
  t.is(is.git(), true, 'git(current)')
  t.is(is.git(resolve()), false, 'git(foo)')
  t.is(is.git(resolve('bar')), true, 'git(bar)')
  t.is(is.git(resolve('bar', 'baz')), true, 'git(baz)')
})

test('is.gitRoot', t => {
  t.is(is.gitRoot(), true, 'git(current)')
  t.is(is.gitRoot(resolve()), false, 'git(foo)')
  t.is(is.gitRoot(resolve('bar')), true, 'git(bar)')
  t.is(is.gitRoot(resolve('bar', 'baz')), false, 'git(baz)')
})
