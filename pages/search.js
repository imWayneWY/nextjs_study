import { withRouter } from 'next/router'
const api = require('../lib/api')

const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'JAVA', 'Python']
const SORT_TYPES = [
  {
    name: 'Best Match'
  },
  {
    name: 'Most Stars',
    value: 'stars',
    order: 'desc'
  },
  {
    name: 'Fewest Stars',
    value: 'stars',
    order: 'asc'
  },
  {
    name: 'Most Forks',
    value: 'forks',
    order: 'desc'
  },
  {
    name: 'Fewest Forks',
    value: 'forks',
    order: 'asc'
  },
]

/**
 * 
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 */

function Search({router, repos}) {
  console.log(repos)
  return <span>{router.query.query}</span>
}

Search.getInitialProps = async ({ ctx }) => {
  const { query, sort, lang, order, page } = ctx.query

  if (!query) {
    return {
      repos: {
        total_count: 0
      }
    }
  }

  // ?q=react+language:javascript&sort=star&order=desc&page=2

  let queryString = `?q=${query}`
  if (lang) queryString += `language:${lanng}`
  if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`
  if (page) queryString += `&page=${page}`
  console.log(queryString);
  const result = await api.request({
    url: `/search/repositories${queryString}`
  }, ctx.req, ctx.res)

  return {
    repos: result.data
  }
}

export default withRouter(Search)