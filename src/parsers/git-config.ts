import {simpleGit, RemoteWithRefs} from 'simple-git'

import {QuickGitInfo} from '../interfaces'

export async function getGitInfo(): Promise<QuickGitInfo> {
  const reGitHubUser = /https:\/\/github.com\/(?<githubUserName>.*)\/.*/
  const git = simpleGit()

  const remotes: RemoteWithRefs[] = await git.getRemotes(true)
  const remote = remotes.find(r => r.name === 'origin')
  let githubHandle

  if (remote?.refs.fetch) {
    const match = remote.refs.fetch.match(reGitHubUser)
    const groups = match?.groups
    githubHandle = groups?.githubUserName
  }

  const authorName = await (await git.getConfig('user.name')).value
  const authorEmail = await (await git.getConfig('user.email')).value

  return {
    authorName,
    authorEmail,
    githubHandle,
  }
}
