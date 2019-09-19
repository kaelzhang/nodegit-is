const {sync} = require('execa')
const {resolve} = require('path')
const isPathInside = require('is-path-inside')

const getGitDir = cwd => {
  let dir

  try {
    dir = sync('git', ['rev-parse', '--git-dir'], {cwd})
  } catch (err) {
    return null
  }

  return resolve(cwd, dir)
}

const git = (cwd = process.cwd()) => {
  const dir = getGitDir(cwd)
  return dir === cwd || isPathInside(cwd, dir)
}

const gitRoot = (cwd = process.cwd()) => {
  const dir = getGitDir(cwd)
  return dir === cwd
}

module.exports = {
  git,
  gitRoot
}
