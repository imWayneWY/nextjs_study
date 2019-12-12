import axios from 'axios'
import { useEffect } from 'react'

const api = require('../lib/api')

function Index () { 
  return <span>Index</span> 
}
Index.getInitialProps = async ({ctx}) => {
  // const result =   await  axios.get('/github/search/repositories?q=react')
  //     .then(resp => console.log(resp))

  // ctx.req and ctx.res only works when it is run on server
  const result = await api.request(
    {
      url: '/search/repositories?q=react',
    },
    ctx.req,
    ctx.res
  )
  return {
    data: result.data
  }
}

export default Index