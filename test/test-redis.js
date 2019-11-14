const Redis = require('ioredis')

async function test() {
  const redis = new Redis({
    port: 6379
  })

  await redis.setex('c', 10, 123)
  // const keys = await redis.keys('*')
  console.log(await redis.get('b'))
}

test()