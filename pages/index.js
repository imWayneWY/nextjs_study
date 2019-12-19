import axios from 'axios'
import { useEffect } from 'react'
import { Button, Icon } from 'antd'
import getConfig from 'next/config'
import { connect } from 'react-redux'

const { publicRuntimeConfig } = getConfig()



const api = require('../lib/api')

function Index ({ userRepos, userStaredRepos, user }) { 
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
          <Icon type="email" style={{ marginRight: 10 }}></Icon>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      </div>
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

export default connect(
  function mapState(state) {
    return {
      user: state.user
    }
  }
)(Index)