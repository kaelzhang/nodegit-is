const {sync} = require('execa')
const {resolve, dirname} = require('path')
const fs = require('fs')
const isPathInside = require('is-path-inside')

const getGitRepoRoot = cwd => {
  let dir

  try {
    dir = sync('git', ['rev-parse', '--git-dir'], {cwd}).stdout
  } catch (err) {
    return
  }

  return dirname(resolve(cwd, dir))
}

const git = (cwd = process.cwd()) => {
  cwd = fs.realpathSync(cwd)

  const dir = getGitRepoRoot(cwd)

  return !!dir && (
    dir === cwd || isPathInside(cwd, dir)
  )
}

const gitRoot = (cwd = process.cwd()) => {
  cwd = fs.realpathSync(cwd)

  const dir = getGitRepoRoot(cwd)
  return !!dir && dir === cwd
}

module.exports = {
  git,
  gitRoot
}
