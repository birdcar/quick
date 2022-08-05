export type QuickGitInfo = {
  authorName: string | null
  authorEmail: string | null
  githubHandle: string | undefined
}

export type ActionRequirement = {
  name: string
  description: string
  required: boolean
  default: string | null
}
