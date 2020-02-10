import withRepoBasic from '../../components/with-repo-basic'

import api from '../../lib/api'

function Issues ({text}) {
  return <span>Issues Index {text}</span>
}

Issues.getInitialProps = async ({ctx}) => {
  const { owner, name } = ctx.query
  const issuesResp = await api.request({
    url: `/repos/${owner}/${name}/issues`
  }, ctx.req, ctx.res)

  return {
    issues: iss
  }
} 

export default withRepoBasic(Issues, 'issues')