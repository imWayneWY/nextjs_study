import withRepoBasic from '../../components/with-repo-basic'

import api from '../../lib/api'
import { Avatar, Button } from 'antd'
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { getLastUpdated } from '../../lib/util'

const MDRenderer = dynamic(() => import('../../components/MarkdownRender'))

function IssueDetail({issue}) {
  return(
    <div className="root">
      <MDRenderer content={issue.body}/>
      <div className="actions">
        <Button href={issue.html_url} target="_blank">Go to Discuss</Button>
      </div>
      <style jsx>{`
        .root{
          background: #fafafa;
          padding: 20px;
        }
        .actions{
          text-align: right;
        }
      `}</style>
    </div>
  )
}

function IssueItem({issue}) {
  const [showDetail, setShowDetail] = useState(false)
  const toggleShowDetail = useCallback(() => {
    setShowDetail(detail => !detail)  // escape from closure
  },[])
  return (
    <div>
      <div className="issue">
        <Button type="primary" size="small" style={{ position: 'absolute', right: 10, top: 10}}
          onClick={toggleShowDetail}
        >
          {showDetail? 'HIDE' : 'SHOW'}
        </Button>
        <div className="avatar">
          <Avatar src={issue.user.avatar_url} shape="square" size={50}/>
        </div>
        <div className="main-info">
          <h6>
            <span>{issue.title}</span>
          </h6>
          <p className="sub-info">
            <span>Updated at {getLastUpdated(issue.updated_at)}</span>
          </p>
        </div>
        <style jsx>{`
          .issue {
            display: flex;
            position: relative;
            padding: 10px;
          }
          .issue:hover {
            background: #fafafa;
          }
          .issue + .issue {
            border-top: 1px solid #eee;
          }
          ,main-info > h6 {
            max-width: 600px;
            font-size: 16px;
            padding-right: 50px;
          }
          .avatar {
            margin-right: 20px;
          }
          .sub-info {
            margin-bottom: 0;
          }
          .sub-info > span + span {
            display: inline-block;
            magin-left: 20px;
            font-size: 12px;
          }
        `}</style>
      </div>
      { showDetail? <IssueDetail issue={issue} /> : null }
    </div>
  )
}

function Issues ({ issues }) {
  console.log(issues)
  return (
    <div className="root">
      <div className="issues">
        {issues.map(issue => <IssueItem issue={issue} key={issue.id}/>)}
      </div>
      <style jsx>{`
        .issues {
          border: 1px solid #eee;
          border-radius: 5px;
          margin-bttom: 20px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

Issues.getInitialProps = async ({ ctx }) => {
  const { owner, name } = ctx.query
  const issuesResp = await api.request({
    url: `/repos/${owner}/${name}/issues`
  }, ctx.req, ctx.res)

  return {
    issues: issuesResp.data
  }
} 

export default withRepoBasic(Issues, 'issues')