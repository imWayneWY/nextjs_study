import { withRouter } from 'next/router'
import { Row, Col, List } from 'antd'
import { Item } from 'rc-menu'
import Link from 'next/link'
import Router from 'next/router'
import { useCallback, memo } from 'react'

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

const selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100,
}

/**
 * 
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 */


const FilterLink = memo(({ name, query, lang, sort, order }) => {
  // const doSearch = (config) => {
  //   Router.push({
  //     pathname: '/search',
  //     query: {
  //       query,
  //       lang,
  //       order,
  //       sort,
  //     }
  //   })
  // }
  let queryString = `?query=${query}`
  if (lang) queryString += `&lang=${lang}`
  if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`
  
  return <Link href={`/search${queryString}`}><a>{name}</a></Link>
})
  
function Search({router, repos}) {
  console.log(repos)

  const { ...querys } = router.query
  const { lang, sort, order } = router.query


  return (
    <div className='root'>
      <Row gutter={20}>
        <Col span={6}>
          <List
            bordered
            header={<span className="list-header">Language</span>}
            style={{ marginBottom: 20 }}
            dataSource={LANGUAGES}
            renderItem={item => {
              const selected = lang === item

              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {selected ? <span>{item}</span> : <FilterLink {...querys} lang={item} name={item}/>}
                </List.Item>
              )
            }}
          />
          <List
            bordered
            header={<span className="list-header">Sort</span>}
            style={{ marginBottom: 20 }}
            dataSource={SORT_TYPES}
            renderItem={item => {
              let selected = false
              if (item.name === 'Best Match' && !sort) {
                selected = true
              } else if (item.value === sort && item.order === order) {
                selected = true
              }
              return (
                <List.Item style={selected ? selectedItemStyle : null}>
                  {selected? <span>{item.name}</span> : <FilterLink {...querys} sort={item.value || ''} order={item.order || ''} name={item.name}/>}
                </List.Item>
              )
            }}
          />
        </Col>
      </Row>
      <style jsx>{`
        .root {
          padding: 20px 0;
        }
        .list-header {
          font-weight: 800;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
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
  if (lang) queryString += `language:${lang}`
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