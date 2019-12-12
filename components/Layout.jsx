import { connect } from 'react-redux'
import Link from 'next/link'
import getConfig from 'next/config'
import { Button, Layout, Icon, Input, Avatar, Tooltip, Dropdown, Menu } from 'antd'
import { useState, useCallback } from 'react'
const { Header, Content, Footer } = Layout
import Container from './Container'
import { logout } from './../store/store'
import axios from 'axios'
import { withRouter } from 'next/router'
const { publicRuntimeConfig } = getConfig()

// 写在外面是为了每次渲染时都是过来拿到这个对象，而不是定义新对象重复渲染
const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20,
}

const footerStyle = {
  textAlign: 'center',
}

const Comp = ({children, color, style}) => {
  return (
    <div style={{color, ...style}}>{children}</div>
  )
}

function MyLayout ({ children, user, logout, router, }) {
  const urlQuery = router.query && router.query.query
  const [search, setSearch] = useState(urlQuery || '')

  const handleSearchChange = useCallback(
    (event) => {
      setSearch(event.target.value)
    },
    [setSearch],
  )
  const handleGotoOAuth = useCallback((e) => {
    e.preventDefault()
    axios.get(`/prepare-auth?url=${router.asPath}`)
      .then(resp => {
        if (resp.status === 200) {
          location.href = publicRuntimeConfig.OAUTH_URL
        } else {
          console.log('prepare auth failed', resp)
        }
      }).catch(err => {
        console.log('prepare auth failed', err)
      })
  }, [])
  const handleLogout  = useCallback(() => {
    logout()
  }, [logout])

  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>Log Out</a>
      </Menu.Item>
    </Menu>
  )

  const handleOnSearch = useCallback(
    () => {
      router.push(`/search?query=${search}`)
    },
    [search],
  )

  return (
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner"/>}>
        {/* <div className="header-inner"> */}
          <div className="header-left">
            <div className="logo">
              <Link href='/'>
                <Icon type="github" style={githubIconStyle}></Icon>
              </Link>
            </div>
            <div>
              <Input.Search 
                placeholder="Search Repos" 
                value={search} 
                onChange={handleSearchChange}
                onSearch={handleOnSearch}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              {
                user && user.id
                ?(
                  <Dropdown overlay={userDropDown}>
                  <a href="/">
                    <Avatar size={40} src={user.avatar_url} />
                  </a>
                  </Dropdown>
                )
                :(
                  <Tooltip title="Click here to Login In"> 
                    {/* <a href= {publicRuntimeConfig.OAUTH_URL} onClick={handleGotoOAuth}> */}
                    <a href={`/prepare-auth?url=${router.asPath}`}>
                      <Avatar size={40} icon="user" />
                    </a>
                  </Tooltip>
                )
              }
            </div>
          </div>
        {/* </div> */}
        </Container>
      </Header>
      <Content>
        <Container renderer={<Comp color="red"/>} >
        {/* <Container render={<div />} > */}
          {children}
        </Container>
      </Content>
      <Footer style={footerStyle}>
        Develop by Weiyan @
        <a href="mailto: im.weiyan@foxmail.com">im.weiyan@foxmail.com</a>
      </Footer>
      <style jsx>{`
        .header-inner {
          display: flex;
          justify-content: space-between;
        }
        .header-left {
          display: flex;
          justify-content: space-start;
        }
      `}</style>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
        .ant-layout {
          min-height: 100%;
        }
        .ant-layout-header{
          padding-left: 0;
          padding-right: 0;
        }
        .ant-layout {
          background: #fff;
        }
      `}
      </style>
    </Layout>
  )
}

export default connect(
  function mapState(state) {
    return {
      user: state.user,
    }
  },
  function mapReducer(dispatch) {
    return {
      logout: () => dispatch(logout())
    }
  }
)(withRouter(MyLayout))