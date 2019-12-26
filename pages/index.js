import axios from 'axios'
import { useEffect } from 'react'
import { Button, Icon, Tabs } from 'antd'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import Repo from '../components/Repo'
import Router, { withRouter } from 'next/router'
import LRU from 'lru-cache'
import { cacheArray } from '../lib/repo-basic-cache'
const cache = new LRU({
  maxAge: 1000 * 60 * 10 //10 mins
})

const { publicRuntimeConfig } = getConfig()

const api = require('../lib/api')

const isServer = typeof window === 'undefined'

let cachedUserRepos, cachedUserStaredRepos

function Index ({ userRepos, userStaredRepos, user, router }) {
  const tabKey = router.query.key || '1'

  const handleTabChange = (activeKey) => {
    Router.push(`/?key=${activeKey}`)
  }

  useEffect(() => {
    if (!isServer) {
      if (userRepos) {
        cache.set('userRepos', userRepos)
      }
      if (userStaredRepos) {
        cache.set('userStaredRepos', userStaredRepos)
      }
      // cachedUserRepos = userRepos
      // cachedUserStaredRepos = userStaredRepos
      // const timeout = setTimeout(() => {  // 另一种设置时间缓存机制的方法
                                              // 10分钟肯定或大概率要更新，就使用这种方式
                                              // 如果大概率不会更新 LRU更好
      //   cachedUserRepos = null
      //   cachedUserStaredRepos = null
      // }, 1000 * 10)
    }
  }, [userRepos, userStaredRepos]) //传入这两个props，这样在10分钟以后才会再次存cache，否则useEffect只在渲染时执行一次！

  useEffect(() => {
    if (!isServer) { 
      cacheArray(userRepos)
      cacheArray(userStaredRepos)
    }
  })
  
  if (!user || !user.id) {
    return <div className="root">
      <p>You haven't login yet</p>
      <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>Login</Button>
      <style jsx>{`
        .root {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  }
  console.log(user)
  return (
    <div className="root">
      <div className="user-info">
        <img src={user.avatar_url} alt="user avatar" className="avatar" />
        <span className="login">{user.login}</span>
        <span className="name">{user.name}</span>
        <span className="bio">{user.bio}</span>
        <p className="email">
          <Icon type="mail" style={{ marginRight: 10 }}></Icon>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      </div>
      <div className="user-repos">
          <Tabs defaultActiveKey={tabKey} onChange={handleTabChange} animated={false}>
            <Tabs.TabPane tab="Your Repos" key="1">
              {userRepos.map(repo => <Repo key={repo.id} repo={repo}/>)}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Your Stared Repos" key="2">
              {userStaredRepos.map(repo => <Repo key={repo.id} repo={repo}/>)}
            </Tabs.TabPane>
          </Tabs>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          align-items: flex-start;
          padding: 20px 0;
        }
        .user-info {
          width: 200px;
          margin-right: 40px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .login {
          font-weight: 800;
          font-size: 20px;
          margin-top: 20px;
        }
        .name {
          font-size: 16px;
          color: #777;
        }
        .bio {
          margin-top: 20px;
          color: #333;
        }
        .avatar {
          width: 100%;
          border-radius: 5px;
        }
        .user-rops {
          flex-grow: 1
        }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async ({ctx, reduxStore}) => {
  // const result =   await  axios.get('/github/search/repositories?q=react')
  //     .then(resp => console.log(resp))

  // ctx.req and ctx.res only works when it is run on server
  const user = reduxStore.getState().user
  if (!user || !user.id) {
    return {
    }
  }
  if (!isServer) {
    if (cache.get('userStaredRepos') && cache.get('userRepos')) {
      return {
        userRepos: cache.get('userRepos'),
        userStaredRepos: cache.get('userStaredRepos'),
      }
    }
  }
  
  const userRepos = await api.request(
    {
      // url: '/search/repositories?q=react',
      url: '/user/repos',
    },
    ctx.req,
    ctx.res
  )
  const userStaredRepos = await api.request({
    url: '/user/starred',
  }, ctx.req, ctx.res)

  return {
    // data: result.data
    userRepos: userRepos.data,
    userStaredRepos: userStaredRepos.data,
  }
}

export default withRouter(connect(
  function mapState(state) {
    return {
      user: state.user
    }
  }
)(Index))