import { expect, test } from '@oclif/test'

describe('create', () => {
  test
    .stdout()
    .command(['create', 'add_to_project', '--authorName', '"Mona Octocat"', '--authorEmail', '"mona@example.com"'])
    .it('runs create', ctx => {
      expect(ctx.stdout).to.contain('add_to_project')
    })
})
