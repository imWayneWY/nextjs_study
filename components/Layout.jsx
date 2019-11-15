import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
  <>
    <header>
      <Link href="/a?id=1" as="/a/1">
        <Button>Go to A</Button>
      </Link>
      <Link href="/test/b">
        <Button>Go to B</Button>
      </Link>
    </header>
    {children}
  </>
)